import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../../Loader/Loader';
import UserCard from '../UserCard/UserCard';
import ErrorNotification from '../../ErrorNotification/ErrorNotification';
import styles from './UserById.module.css';
import * as API from '../../../services/article-api';

export default class UserById extends Component {
  static propTypes = {
    match: PropTypes.objectOf.isRequired,
    onGoBack: PropTypes.func.isRequired,
  };

  state = {
    user: {},
    error: null,
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    const { match } = this.props;
    API.fetchUser(match.params.id)
      .then(data => this.setState({ user: data.data.user }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { user, isLoading, error } = this.state;
    const { onGoBack } = this.props;

    return (
      <div>
        {isLoading && <Loader />}
        {error ? (
          <ErrorNotification text={error.message} />
        ) : (
          <div className={styles.UserByIdContainer}>
            <button className={styles.goBack} type="button" onClick={onGoBack}>
              <i className="material-icons">reply</i>
            </button>
            <UserCard {...user} />
          </div>
        )}
      </div>
    );
  }
}
