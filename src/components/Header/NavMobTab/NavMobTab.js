import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './NavMobTab.module.css';

const NavMobTab = () => (
  <div className={styles.fixedContainer}>
    <div className={styles.navMobTab}>
      <Link to="/">
        <i className={styles.logoPicture} />
      </Link>
      <hr className={styles.firstHr} />
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
        <li className={styles.listItem}>
          <NavLink
            to="/termsandconditions"
            className={styles.static}
            activeClassName={styles.active}
          >
            Terms and Conditions
          </NavLink>
        </li>
        <hr className={styles.secondHr} />
        <li className={styles.listItem}>
          <NavLink
            to="/howitworks"
            className={styles.static}
            activeClassName={styles.active}
          >
            How it works
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink
            to="/partnership"
            className={styles.static}
            activeClassName={styles.active}
          >
            Partnership
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink
            to="/help"
            className={styles.static}
            activeClassName={styles.active}
          >
            Help
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink
            to="/leavetestimonial"
            className={styles.static}
            activeClassName={styles.active}
          >
            Leave testimonial
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink
            to="/contactus"
            className={styles.static}
            activeClassName={styles.active}
          >
            Contact us
          </NavLink>
        </li>
        <hr className={styles.secondHr} />
        <li className={styles.listItem}>
          <NavLink
            to="/articles"
            className={styles.static}
            activeClassName={styles.active}
          >
            Articles
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink
            to="/ournews"
            className={styles.static}
            activeClassName={styles.active}
          >
            Our news
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink
            to="/testimonials"
            className={styles.static}
            activeClassName={styles.active}
          >
            Testimonials
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink
            to="/licenses"
            className={styles.static}
            activeClassName={styles.active}
          >
            Licenses
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink
            to="/privacypolicy"
            className={styles.static}
            activeClassName={styles.active}
          >
            Privacy Policy
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default NavMobTab;
