import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavDesktop.module.css';

const NavDesktop = () => (
  <ul className={styles.list}>
    <li className={styles.listItem}>
      <NavLink
        to="/aboutme"
        exact
        className={styles.static}
        activeClassName={styles.active}
      >
        About me
      </NavLink>
    </li>
    <li className={styles.listItem}>
      <NavLink
        to="/relationships"
        className={styles.static}
        activeClassName={styles.active}
      >
        Relationships
      </NavLink>
    </li>
    <li className={styles.listItem}>
      <NavLink
        to="/requirements"
        className={styles.static}
        activeClassName={styles.active}
      >
        Requirements
      </NavLink>
    </li>
    <li className={styles.listItem}>
      <NavLink
        to="/users"
        className={styles.static}
        activeClassName={styles.active}
      >
        Users
      </NavLink>
    </li>
    <li className={styles.listItem}>
      <NavLink
        to="/signup"
        className={styles.static}
        activeClassName={styles.active}
      >
        Sign Up
      </NavLink>
    </li>
  </ul>
);

export default NavDesktop;
