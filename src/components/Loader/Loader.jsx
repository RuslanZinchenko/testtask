import React from 'react';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';
import styles from './Loader.module.css';

const Loader = ({ error, timedOut, pastDelay, retry }) => {
  if (error) {
    return (
      <div>
        Error!
        <br />
        <button type="button" onClick={retry}>
          Retry
        </button>
      </div>
    );
  }

  if (timedOut) {
    return (
      <div>
        Taking a long time...
        <button type="button" onClick={retry}>
          Retry
        </button>
      </div>
    );
  }

  if (pastDelay) {
    return (
      <div>
        <Spinner
          name="line-spin-fade-loader"
          color="steelblue"
          fadeIn="none"
          className={styles.spinner}
        />
      </div>
    );
  }

  return null;
};

Loader.propTypes = {
  error: PropTypes.func.isRequired,
  timedOut: PropTypes.bool.isRequired,
  pastDelay: PropTypes.bool.isRequired,
  retry: PropTypes.func.isRequired,
};

export default Loader;
