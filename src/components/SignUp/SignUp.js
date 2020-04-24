import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { validateAll } from 'indicative/validator';
import * as API from '../../services/article-api';
// eslint-disable-next-line import/extensions
import Loader from '../Loader/Loader.jsx';
// eslint-disable-next-line import/extensions
import ErrorNotification from '../ErrorNotification/ErrorNotification.jsx';
// eslint-disable-next-line import/extensions
import ErrorValidation from '../ErrorValidation/ErrorValidation.jsx';
import styles from './SignUp.module.css';

const rules = {
  name: 'required|string|min:3',
  email: 'required|email',
  phone: 'required|number',
  position: 'required',
  photo: 'required',
};

const messages = {
  'name.required': 'Please choose a unique username for your account',
  'name.min': 'Your name is too short',
  'email.required': 'Enter a valid email address',
  'email.email': 'Email is invalid',
  'phone.required': 'Enter a valid phone number',
  'phone.number': 'Please write down only the numbers',
  'position.required': 'Please choose your position',
  'photo.required': 'Please upload your photo',
};

const cutName = (val, num) => {
  const valToString = String(val);
  if (valToString.length > num) {
    return val.slice(0, num).concat('...');
  }
  return val;
};

export default class SignUp extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    email: '',
    phone: null,
    position: '',
    photo: null,
    positions: [],
    token: '',
    isLoading: false,
    error: null,
    errors: null,
  };

  inputRef = createRef();

  componentDidMount() {
    this.setState({ isLoading: true });
    API.fetchToken()
      .then(data => this.setState({ token: data.data.token }))
      .catch(error => this.setState({ error }));
    API.fetchPosition()
      .then(data => this.setState({ positions: data.data.positions }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { current } = this.inputRef;
    this.setState({ isLoading: true });
    const { name, email, phone, position, photo, token } = this.state;
    const { onSubmit } = this.props;
    const attachFile = current.files[0];
    const attachSize = 1 * 1024 * 1024;
    if (attachFile && attachFile.size > attachSize) {
      const formattedErrors = {};
      formattedErrors.photo = 'Your photo should not be more than 1 MB';
      this.setState({ errors: formattedErrors });
    } else {
      validateAll({ name, email, phone, position, photo }, rules, messages)
        .then(() => {
          const formData = new FormData();
          formData.append('position_id', 2);
          formData.append('name', name);
          formData.append('email', email);
          formData.append('phone', phone);
          formData.append('photo', current.files[0]);

          fetch(
            'https://frontend-test-assignment-api.abz.agency/api/v1/users',
            {
              method: 'POST',
              body: formData,
              headers: {
                Token: token,
              },
            },
          )
            .then(response => response.json())
            .then(data => {
              if (data.success === false) {
                const formattedErrors = {};
                formattedErrors.doubleUser = data.message;
                this.setState({ errors: formattedErrors });
              } else {
                onSubmit();
                this.reset();
              }
            })
            .catch(error => {
              this.setState({ error });
            });
        })
        .catch(err => {
          const formattedErrors = {};
          err.forEach(error => {
            formattedErrors[error.field] = error.message;
          });
          this.setState({ errors: formattedErrors });
        })
        .finally(() => this.setState({ isLoading: false }));
    }
  };

  reset = () => {
    this.setState({
      name: '',
      email: '',
      phone: null,
      position: '',
      photo: null,
      errors: null,
    });
  };

  render() {
    const {
      name,
      email,
      phone,
      position,
      photo,
      positions,
      isLoading,
      error,
      errors,
    } = this.state;

    return (
      <div>
        {isLoading && <Loader />}
        <div className={styles.registerFormWrapper}>
          <h2 className={styles.registerFormTitle}>Register to get a work</h2>
          <div className={styles.registerFormContent}>
            <p className={styles.registerFormText}>
              Attention! After successful registration and alert, update the
              list of users in the block from the top
            </p>

            <form
              onSubmit={this.handleSubmit}
              encType="multipart/form-data"
              method="post"
              className={styles.registrationForm}
            >
              <section className={styles.labelContainer}>
                <label className={styles.label}>
                  <p className={styles.labelTitle}>Name</p>
                  <input
                    type="text"
                    value={name}
                    onChange={this.handleChange}
                    name="name"
                    placeholder="Your name"
                    className={
                      errors && !!errors.name
                        ? styles.inputSectionInvalid
                        : styles.inputSectionValid
                    }
                  />
                  {errors && <ErrorValidation text={errors.name} />}
                </label>
                <label className={styles.label}>
                  <p className={styles.labelTitle}>Email</p>
                  <input
                    type="email"
                    value={email}
                    onChange={this.handleChange}
                    name="email"
                    placeholder="Your email"
                    className={
                      errors && !!errors.email
                        ? styles.inputSectionInvalid
                        : styles.inputSectionValid
                    }
                  />
                  {errors && <ErrorValidation text={errors.email} />}
                </label>
                <label className={styles.label}>
                  <p className={styles.labelPhoneTitle}>Phone number</p>
                  <input
                    type="tel"
                    value={phone}
                    onChange={this.handleChange}
                    name="phone"
                    placeholder="+380 XX  XXX  XX XX"
                    className={
                      errors && !!errors.phone
                        ? styles.inputNumberSectionInvalid
                        : styles.inputNumberSectionValid
                    }
                  />
                  <p className={styles.inputNumberFormat}>
                    Enter phone number in open format
                  </p>
                  {errors && <ErrorValidation text={errors.phone} />}
                </label>
              </section>
              <section className={styles.positionsSection}>
                <p className={styles.selectLabelTitle}>Select your position</p>
                <div className={styles.labelContainer}>
                  {positions.map(val => {
                    return (
                      <label className={styles.radioLabel} key={val.id}>
                        <input
                          type="radio"
                          checked={position === val.name}
                          name="position"
                          value={val.name}
                          onChange={this.handleChange}
                          className={styles.inputRadioLabel}
                        />
                        <span className={styles.radioLabelTitle}>
                          {val.name}
                        </span>
                      </label>
                    );
                  })}
                </div>
                {errors && <ErrorValidation text={errors.position} />}
              </section>
              <section className={styles.photoSection}>
                <p className={styles.photoLabelTitle}>Photo</p>
                <input
                  id="file"
                  type="file"
                  value={photo}
                  onChange={this.handleChange}
                  name="photo"
                  className={styles.photoInput}
                  data-multiple-caption="{count} files selected"
                  multiple
                  accept="image/jpeg,image/png,image/gif"
                  ref={this.inputRef}
                />
                <label
                  htmlFor="file"
                  className={
                    errors && !!errors.photo
                      ? styles.labelPhotoInputInvalid
                      : styles.labelPhotoInputValid
                  }
                >
                  <div
                    className={
                      photo
                        ? styles.leftLabelPhotoInputBlack
                        : styles.leftLabelPhotoInputGrey
                    }
                  >
                    {photo ? cutName(photo.slice(12), 25) : 'Upload your photo'}
                  </div>
                  <div className={styles.rightLabelPhotoInput}>Browse</div>
                </label>
                {errors && <ErrorValidation text={errors.photo} />}
              </section>
              {error && <ErrorNotification text={error.message} />}
              {errors && (
                <div className={styles.centerDirection}>
                  <ErrorValidation text={errors.doubleUser} />
                </div>
              )}
              <button type="submit" className={styles.signUpButton}>
                Sign up now
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
