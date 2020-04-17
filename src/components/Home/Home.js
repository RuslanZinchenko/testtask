import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Users from '../Users/Users';
import SignUp from '../SignUp/SignUp';
import styles from './Home.module.css';

const Home = ({
  users,
  onLoadMore,
  state,
  onChange,
  onSubmit,
  match,
  location,
  history,
  totalPages,
}) => (
  <div className={styles.homeWrapper}>
    <section className={styles.banner}>
      <div className={styles.bannerContent}>
        <h1 className={styles.bannerHeading}>
          Test assignment for frontend developer position
        </h1>
        {window.screen.width < 768 ? (
          <p className={styles.bannerText}>
            We kindly remind you that your test assignment should be submitted
            as a link to github/bitbucket repository.
          </p>
        ) : (
          <p className={styles.bannerText}>
            We kindly remind you that your test assignment should be submitted
            as a link to github/bitbucket repository. Please be patient, we
            consider and respond to every application that meets minimum
            requirements. We look forward to your submission. Good luck! The
            photo has to scale in the banner area on the different screens.
          </p>
        )}
        <Link to="/signup">
          <button type="button" className={styles.signUpButton}>
            Sign up now
          </button>
        </Link>
      </div>
    </section>
    <div className={styles.underBanner}>
      <section className={styles.letsGetAcquaintedSection}>
        <p className={styles.letsGetAcquaintedTitle}>
          Let&#39;s get acquainted
        </p>
        <div className={styles.letsGetAcquaintedContent}>
          <i className={styles.manLaptop} />
          <div className={styles.letsGetAcquaintedDirection}>
            <h2 className={styles.letsGetAcquaintedHeading}>
              I am cool frontend developer
            </h2>
            <p className={styles.letsGetAcquaintedText}>
              We will evaluate how clean your approach to writing
              <span className={styles.uppercaseText}>&nbsp;css</span> and
              Javascript code is. You can use any&nbsp;
              <span className={styles.uppercaseText}>css</span>&nbsp;and
              Javascript 3rd party libraries without any restriction.
            </p>
            <p className={styles.letsGetAcquaintedText}>
              If 3rd party css/javascript libraries are added to the project via
              bower/npm/yarn you will get bonus points. If you use any task
              runner (gulp/webpack) you will get bonus points as well. Slice
              service directory page{' '}
              <span className={styles.uppercaseText}>psd</span> mockup into{' '}
              <span className={styles.uppercaseText}>html5/css3</span>.
            </p>
            <Link to="/signup" className={styles.letsGetAcquaintedLink}>
              Sign up now
            </Link>
          </div>
        </div>
      </section>
      <section id="users" className={styles.usersSection}>
        <Users
          users={users}
          onLoadMore={onLoadMore}
          match={match}
          location={location}
          history={history}
          totalPages={totalPages}
        />
      </section>
      <section className={styles.registerForm}>
        <SignUp {...state} onChange={onChange} onSubmit={onSubmit} />
      </section>
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          &copy; abz.agency specially for the test task
        </p>
      </footer>
    </div>
  </div>
);

Home.propTypes = {
  users: PropTypes.arrayOf.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  state: PropTypes.objectOf.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  match: PropTypes.objectOf.isRequired,
  location: PropTypes.objectOf.isRequired,
  history: PropTypes.objectOf.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Home;
