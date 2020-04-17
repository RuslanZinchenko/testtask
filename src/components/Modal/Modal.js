import React, { createRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const backdropRef = createRef();

const Modal = ({ onBackdropClick, onClose }) => (
  <div
    ref={backdropRef}
    className={styles.backdrop}
    name="modal"
    onClick={e => onBackdropClick(e, backdropRef)}
  >
    <div className={styles.modal}>
      <p className={styles.modalTitle}>Congratulations</p>
      <HashLink
        to={{
          pathname: '/',
          hash: 'users',
        }}
      >
        <button type="button" className={styles.closeModal} onClick={onClose}>
          <i className="material-icons">clear</i>
        </button>
      </HashLink>
      <hr className={styles.modalHr} />
      <p className={styles.modalText}>
        You have successfully passed the registration
      </p>
      <hr className={styles.modalHr} />
      <HashLink
        to={{
          pathname: '/',
          hash: 'users',
        }}
      >
        <button type="button" className={styles.modalGreat} onClick={onClose}>
          <span className={styles.modalGreatText}>Great</span>
        </button>
      </HashLink>
    </div>
  </div>
);

Modal.propTypes = {
  onBackdropClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
