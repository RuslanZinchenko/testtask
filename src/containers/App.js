import React, { Component, createRef } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import Header from '../components/Header/Header.jsx';
// eslint-disable-next-line import/extensions
import ErrorNotification from '../components/ErrorNotification/ErrorNotification.jsx';
import * as API from '../services/article-api';
// eslint-disable-next-line import/extensions
import Loader from '../components/Loader/Loader.jsx';
// eslint-disable-next-line import/extensions
import Modal from '../components/Modal/Modal.jsx';
import * as routes from '../routes';
import styles from './App.module.css';

export default class App extends Component {
  static propTypes = {
    match: PropTypes.objectOf.isRequired,
    location: PropTypes.objectOf.isRequired,
    history: PropTypes.objectOf.isRequired,
  };

  state = {
    users: [],
    isHeader: true,
    isOpen: false,
    isModal: false,
    pageNumber: null,
    isLoading: false,
    error: null,
    isScrollUp: false,
    isUpdateUsers: false,
    totalPages: 0,
  };

  backdropRef = createRef();

  componentDidMount() {
    this.setState({ isLoading: true });
    window.addEventListener('scroll', this.handleScrollUp);
    window.addEventListener('keydown', this.handleKeyPress);
    if (window.screen.width <= 767) {
      API.fetchUsers().then(data =>
        this.setState({
          users: data.data.users,
          pageNumber: 2,
          totalPages: data.data.total_pages,
        }),
      );
    } else {
      API.fetchUsers(1, 6)
        .then(data =>
          this.setState({
            users: data.data.users,
            pageNumber: 2,
            totalPages: data.data.total_pages,
          }),
        )
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  componentDidUpdate() {
    const { isUpdateUsers } = this.state;
    if (isUpdateUsers) {
      if (window.screen.width < 768) {
        API.fetchUsers(1)
          .then(data =>
            this.setState({
              users: data.data.users,
              pageNumber: 2,
            }),
          )
          .catch(error => this.setState({ error }));
      } else if (window.screen.width > 767) {
        API.fetchUsers(1, 6)
          .then(data =>
            this.setState({
              users: data.data.users,
              pageNumber: 2,
            }),
          )
          .catch(error => this.setState({ error }));
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollUp);
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleLoadMore = () => {
    this.setState({ isLoading: true });
    const { pageNumber } = this.state;

    if (window.screen.width < 768) {
      API.fetchUsers(pageNumber, 3)
        .then(data =>
          this.setState(state => ({
            users: [...state.users, ...data.data.users],
            pageNumber: state.pageNumber + 1,
            totalPages: state.totalPages - 1,
          })),
        )
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    } else if (window.screen.width > 767) {
      API.fetchUsers(pageNumber, 6)
        .then(data =>
          this.setState(state => ({
            users: [...state.users, ...data.data.users],
            pageNumber: state.pageNumber + 1,
            totalPages: state.totalPages - 1,
          })),
        )
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }
  };

  handleSubmit = () => {
    this.setState({
      isUpdateUsers: true,
      isModal: true,
      isHeader: false,
    });
  };

  handleGoUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  handleGoBack = () => {
    const { history, location } = this.props;
    if (location.state) {
      return history.push(location.state.from);
    }
    return history.push('/');
  };

  handleScrollUp = () => {
    if (window.scrollY > 200) {
      this.setState({ isScrollUp: true });
    } else {
      this.setState({ isScrollUp: false });
    }
  };

  handleToggle = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  };

  handleClose = () => {
    this.setState({ isOpen: false, isModal: false, isHeader: true });
  };

  handleBackdropClick = (e, val) => {
    const { current } = this.backdropRef;
    if (current && current === e.target) return;
    if (e.target.getAttribute('name') === 'toggleButton') return;
    if (val && val.current !== e.target) return;
    this.handleClose();
  };

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    this.handleClose();
  };

  render() {
    const {
      users,
      isHeader,
      isOpen,
      isModal,
      isLoading,
      error,
      isScrollUp,
      totalPages,
    } = this.state;

    return (
      <div>
        {isLoading && <Loader />}
        {isModal && (
          <Modal
            onClose={this.handleClose}
            onBackdropClick={this.handleBackdropClick}
          />
        )}
        {error ? (
          <ErrorNotification text={error.message} />
        ) : (
          <div
            className={styles.mainWrapper}
            ref={this.backdropRef}
            onClick={this.handleBackdropClick}
          >
            {isHeader && (
              <Header isOpen={isOpen} onToggle={this.handleToggle} />
            )}
            {isScrollUp && (
              <button
                className={styles.arrowUpward}
                type="button"
                onClick={this.handleGoUp}
              >
                <i className="material-icons">arrow_upward</i>
              </button>
            )}
            <Switch>
              <Route
                path="/"
                exact
                render={props => (
                  <routes.AsyncHomePage
                    {...props}
                    users={users}
                    state={this.state}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    onLoadMore={this.handleLoadMore}
                    totalPages={totalPages}
                  />
                )}
              />
              <Route
                path="/users/:id"
                render={props => (
                  <routes.AsyncUserPage
                    {...props}
                    onGoBack={this.handleGoBack}
                  />
                )}
              />
              <Route path="/aboutme" component={routes.AsyncAboutMePage} />
              <Route
                path="/relationships"
                component={routes.AsyncRelationshipsPage}
              />
              <Route
                path="/users"
                render={props => (
                  <routes.AsyncUsersPage
                    {...props}
                    users={users}
                    onLoadMore={this.handleLoadMore}
                    totalPages={totalPages}
                  />
                )}
              />
              <Route
                path="/signup"
                render={() => (
                  <routes.AsyncSignUpPage onSubmit={this.handleSubmit} />
                )}
              />
              <Route
                path="/termsandconditions"
                component={routes.AsyncTermsAndConditionsPage}
              />
              <Route
                path="/howitworks"
                component={routes.AsyncHowItWorksPage}
              />
              <Route
                path="/partnership"
                component={routes.AsyncPartnershipPage}
              />
              <Route path="/help" component={routes.AsyncHelpPage} />
              <Route
                path="/leavetestimonial"
                component={routes.AsyncLeaveTestimonialPage}
              />
              <Route path="/contactus" component={routes.AsyncContactUsPage} />
              <Route path="/articles" component={routes.AsyncArticlesPage} />
              <Route path="/ournews" component={routes.AsyncOurNewsPage} />
              <Route
                path="/testimonials"
                component={routes.AsyncTestimonialsPage}
              />
              <Route path="/licenses" component={routes.AsyncLicensesPage} />
              <Route
                path="/privacypolicy"
                component={routes.AsyncPrivacyPolicyPage}
              />
              <Route
                path="/requirements"
                component={routes.AsyncRequirementsPage}
              />
              <Redirect from="*" to="/" />
            </Switch>
          </div>
        )}
      </div>
    );
  }
}
