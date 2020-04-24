import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorValidation.module.css';

const ErrorValidation = ({ text }) => (
  <div className={styles.errorTextWrapper}>
    <p className={styles.errorText}>{text}</p>
  </div>
);

ErrorValidation.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ErrorValidation;
