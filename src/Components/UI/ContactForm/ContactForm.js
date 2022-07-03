import React, { useState, useRef } from "react";

import useInput from "../../../Hooks/use-input";
import useDynamicClasses from "../../../Hooks/use-dynamicClasses";

import emailjs from "emailjs-com";
import styles from "./_ContactForm.module.scss";
import Button from "../../UI/Button";
import close from "../../../Icons/FA/times-solid.svg";

import DisplayResult from "./DisplayResult";

import InputMask from "react-input-mask";

const ContactForm = props => {
  const [year, setYear] = useState("");
  const [vin, setVin] = useState("");
  const [formSentSuccessfully, setFormSentSuccessfully] = useState(false);

  const successHandler = () => {
    setFormSentSuccessfully(true);
  };

  const isNotEmpty = value => value.trim() !== "";
  //14 is amount of characters including parenthesis, hyphen, and numbers
  const isPhoneNumber = value => value.length === 14;
  const isEmail = value => value.includes("@") && value.includes(".");

  const form = useRef();
  const {
    value: enteredFirstName,
    isValid: nameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useInput(isNotEmpty);

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(isNotEmpty && isEmail);

  const {
    value: enteredPhoneNum,
    isValid: phoneNumIsValid,
    hasError: phoneNumHasError,
    valueChangeHandler: phoneNumChangeHandler,
    inputBlurHandler: phoneNumBlurHandler,
    reset: resetPhoneNum
  } = useInput(isNotEmpty && isPhoneNumber);

  const {
    value: enteredMake,
    isValid: makeIsValid,
    hasError: makeHasError,
    valueChangeHandler: makeChangeHandler,
    inputBlurHandler: makeBlurHandler,
    reset: resetMake
  } = useInput(isNotEmpty);

  const {
    value: enteredModel,
    isValid: modelIsValid,
    hasError: modelHasError,
    valueChangeHandler: modelChangeHandler,
    inputBlurHandler: modelBlurHandler,
    reset: resetModel
  } = useInput(isNotEmpty);

  const {
    value: enteredMessage,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    nameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    phoneNumIsValid &&
    makeIsValid &&
    modelIsValid &&
    messageIsValid
  ) {
    formIsValid = true;
  }

  const yearInputChangeHandler = e => {
    setYear(e.target.value);
  };

  const vinInputChangeHandler = e => {
    setVin(e.target.value);
  };

  const formSubmissionHandler = e => {
    e.preventDefault();

    if (
      firstNameHasError &&
      lastNameHasError &&
      emailHasError &&
      phoneNumHasError &&
      makeHasError &&
      modelHasError &&
      messageHasError
    ) {
      return;
    }

    if (!formIsValid) return;

    emailjs
      .sendForm(
        "service_wuh0tvq",
        "template_5txpjlx",
        form.current,
        "user_HKI5D9N8lHg0OrMzAbpUM"
      )
      .then(
        result => {
          console.log(result.text);
          successHandler();
        },
        error => {
          console.log(error.text);
          alert(
            `${error.text} . Error! Something went wrong, please try to contact me by phone.`
          );
        }
      );

    resetFirstName();
    resetLastName();
    resetEmail();
    resetPhoneNum();
    resetMake();
    resetModel();
    resetMessage();

    setYear("");
    setVin("");
  };

  //custom hook that sets dynamic classes
  const nameInputClasses = useDynamicClasses(firstNameHasError, nameIsValid);
  const lastNameInputClasses = useDynamicClasses(
    lastNameHasError,
    lastNameIsValid
  );
  const emailInputClasses = useDynamicClasses(emailHasError, emailIsValid);
  const phoneNumInputClasses = useDynamicClasses(
    phoneNumHasError,
    phoneNumIsValid
  );
  const makeInputClasses = useDynamicClasses(makeHasError, makeIsValid);
  const modelInputClasses = useDynamicClasses(modelHasError, modelIsValid);
  const messageInputClasses = useDynamicClasses(
    messageHasError,
    messageIsValid
  );

  return (
    <div className={styles.contact__form}>
      <form
        ref={form}
        method="POST"
        className={styles.contact__form}
        onSubmit={formSubmissionHandler}
      >
        {formSentSuccessfully && <DisplayResult onConfirm={props.onConfirm} />}
        <div onClick={props.onConfirm} className={styles.closeBtn__container}>
          <img src={close} className={styles.close} alt="close" />
        </div>
        <div
          className={styles.input__container}
          id={styles.input__containerOne}
        >
          <div className={`${styles.flex__container} ${styles.contactInfo}`}>
            <label id={styles.labelOne} htmlFor="first-name">
              <h4>Contact Information</h4>
            </label>
            <input
              className={nameInputClasses}
              id="first-name"
              placeholder={
                firstNameHasError ? "Enter a valid name" : "First Name"
              }
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
              value={enteredFirstName}
              type="text"
              name="first-name"
            />

            <input
              className={lastNameInputClasses}
              placeholder={
                lastNameHasError ? "Enter a valid name" : "Last Name"
              }
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
              value={enteredLastName}
              type="text"
              name="last-name"
            />
            <input
              className={emailInputClasses}
              placeholder={emailHasError ? "Enter a valid email" : "Email"}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={enteredEmail}
              type="email"
              name="email"
            />
            <InputMask
              type="tel"
              className={phoneNumInputClasses}
              placeholder={
                phoneNumHasError ? "Enter phone number" : "Tel: 555-555–5555"
              }
              pattern="(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}"
              onChange={phoneNumChangeHandler}
              onBlur={phoneNumBlurHandler}
              value={enteredPhoneNum}
              mask="(999) 999-9999"
              maskChar=" "
              inputMode="numeric"
              name="phone-number"
            />
          </div>
          <div
            className={styles.flex__container}
            id={styles.input__containerTwo}
          >
            <label id={styles.labelTwo} htmlFor="make">
              <h4>Vehicle Information</h4>
            </label>
            <input
              className={makeInputClasses}
              id="make"
              placeholder={makeHasError ? "Enter Make" : "Make"}
              type="text"
              onChange={makeChangeHandler}
              onBlur={makeBlurHandler}
              value={enteredMake}
              name="make"
            />
            <input
              className={modelInputClasses}
              placeholder={modelHasError ? "Enter Model" : "Model"}
              type="text"
              onChange={modelChangeHandler}
              onBlur={modelBlurHandler}
              value={enteredModel}
              name="model"
            />
            <input
              className={styles.inp}
              placeholder="Year (optional)"
              value={year}
              onChange={yearInputChangeHandler}
              name="year"
            />
            <input
              className={styles.inp}
              placeholder="VIN (optional)"
              value={vin}
              onChange={vinInputChangeHandler}
              name="vin"
            />
          </div>
        </div>
        <div className={styles.message__box}>
          <label className={styles.messageLabel} htmlFor="description">
            <h4>Message</h4>
          </label>

          <textarea
            id="description"
            name="description"
            cols="44.5"
            rows="9"
            className={`${messageInputClasses} ${styles.message}`}
            placeholder={
              messageHasError
                ? "How we can help you?"
                : "Tell us what's wrong with your car"
            }
            type="text"
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
            value={enteredMessage}
          />
        </div>
        <footer>
          <Button
            disabled={!formIsValid}
            className={styles.contact__btn}
            type="submit"
          >
            Confirm
          </Button>
        </footer>
      </form>
    </div>
  );
};

export default ContactForm;
