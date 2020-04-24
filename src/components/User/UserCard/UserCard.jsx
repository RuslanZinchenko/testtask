import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './UserCard.module.css';

const cutWord = (val, num) => {
  const valToString = String(val);
  if (valToString.length > num) {
    return val.slice(0, num).concat('...');
  }
  return val;
};

const bigName = (val, num) => {
  const valToString = String(val);
  return valToString.length > num;
};

const pattern = /\d/;
const emptyPhoto =
  'https://frontend-test-assignment-api.abz.agency/images/placeholders/placeholder.png';

const UserCard = ({ photo, name, position, email, phone, location }) =>
  location.pathname.match(pattern) > 0 ? (
    <div className={styles.userBigCard}>
      <img
        src={photo === emptyPhoto ? '' : photo}
        alt={photo === emptyPhoto ? '' : cutWord(name, 10)}
        className={
          photo === emptyPhoto ? styles.bigPhotoCover : styles.userBigImg
        }
      />
      <h3 className={styles.userBigName}>{name}</h3>
      <p className={styles.userBigPosition}>{position}</p>
      <p className={styles.userBigInfo}>{email}</p>
      <p className={styles.userBigInfo}>{phone}</p>
    </div>
  ) : (
    <div className={styles.userSmallCard}>
      <img
        src={photo === emptyPhoto ? '' : photo}
        alt={photo === emptyPhoto ? '' : cutWord(name, 10)}
        className={
          photo === emptyPhoto ? styles.smallPhotoCover : styles.userSmallImg
        }
      />
      <h3 className={styles.userSmallName}>
        {cutWord(name, 30)}
        {bigName(name, 30) && (
          <span className={styles.tooltiptext}>{name}</span>
        )}
      </h3>
      <p
        className={
          bigName(name, 30)
            ? styles.userSmallPositionBigName
            : styles.userSmallPositionSmallName
        }
      >
        {position}
      </p>
      <p className={styles.userSmallInfo}>
        {cutWord(email, 22)}
        {bigName(email, 22) && (
          <span className={styles.tooltiptext}>{email}</span>
        )}
      </p>
      <p className={styles.userSmallInfo}>
        {cutWord(phone, 22)}
        {bigName(phone, 13) && (
          <span className={styles.tooltiptext}>{phone}</span>
        )}
      </p>
    </div>
  );

UserCard.defaultProps = {
  photo: 'photo',
  name: 'name',
  position: 'position',
  email: 'email',
  phone: 'phone',
};

UserCard.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.number,
  location: PropTypes.objectOf.isRequired,
};

export default withRouter(UserCard);
