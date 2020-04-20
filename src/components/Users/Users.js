import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import UserCard from '../User/UserCard/UserCard';
import styles from './Users.module.css';
import popTransition from '../../styles/transitions/pop.module.css';

const sortByLastRegistration = (a, b) => b.id - a.id;
const sortData = val => val.sort(sortByLastRegistration);

const Users = ({ users, onLoadMore, location, totalPages }) => (
  <div className={styles.ourCheerfulUsersWrapper}>
    <h2 className={styles.ourCheerfulUsersTitle}>Our cheerful users</h2>
    <p className={styles.ourCheerfulUsersText}>
      Attention! Sorting users by registration date
    </p>
    {/* <div id="scroll" /> */}
    <TransitionGroup component="ul" className={styles.ourCheerfulUsersList}>
      {sortData(users).map(user => (
        <CSSTransition
          key={user.id}
          timeout={200}
          unmountOnExit
          classNames={popTransition}
        >
          <li key={user.id} className={styles.userIcon}>
            <Link
              to={{
                pathname: `users/${user.id}`,
                state: { from: location },
              }}
            >
              <UserCard {...user} />
            </Link>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>

    {totalPages === 1 && <p className={styles.lastUser}>No more users left</p>}
    <HashLink
      to={{
        pathname: location.pathname.includes('users') ? '/users' : '/',
        hash: 'scroll',
      }}
    >
      <button
        type="button"
        className={styles.showMore}
        onClick={onLoadMore}
        disabled={totalPages === 1}
      >
        Show more
      </button>
    </HashLink>
  </div>
);

Users.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  onLoadMore: PropTypes.func.isRequired,
  location: PropTypes.objectOf.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Users;
