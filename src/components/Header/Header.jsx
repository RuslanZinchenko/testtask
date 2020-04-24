import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import NavDesktop from './NavDesktop/NavDesktop.jsx';
// eslint-disable-next-line import/extensions
import NavMobTab from './NavMobTab/NavMobTab.jsx';
import styles from './Header.module.css';
import slideTransition from '../../styles/transitions/slide.module.css';

const Header = ({ isOpen, onToggle }) => (
  <div className={isOpen ? styles.headerBackdrop : styles.header}>
    <div className={styles.headerContainer}>
      <CSSTransition
        in={isOpen}
        timeout={600}
        classNames={slideTransition}
        unmountOnExit
      >
        <NavMobTab />
      </CSSTransition>
      <div>
        <Link to="/">
          <i className={styles.logoPicture} />
        </Link>
      </div>
      <nav className={styles.navigationSection}>
        {window.screen.width < 1024 ? (
          <button
            type="button"
            className={styles.navigationButton}
            onClick={onToggle}
          >
            <i className={styles.navigationButtonPicture} name="toggleButton" />
          </button>
        ) : (
          <NavDesktop />
        )}
      </nav>
    </div>
  </div>
);

Header.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Header;
