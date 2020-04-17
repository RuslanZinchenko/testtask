import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorNotification.module.css';

const ErrorNotification = ({ text }) => (
  <div>
    <p className={styles.errorText}>{text}</p>
  </div>
);

ErrorNotification.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ErrorNotification;
