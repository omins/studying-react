import useInput from '../hooks/use-input';

const nameValidation = value => {
  return value.trim() !== '';
};

const emailValidation = value => {
  return value.includes('@');
};

const BasicForm = props => {
  const {
    value: enteredFirstName,
    valueIsValid: firstNameIsValid,
    hasError: firstNameHasError,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput(nameValidation);

  const {
    value: enteredLastName,
    valueIsValid: lastNameIsValid,
    hasError: lastNameHasError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput(nameValidation);

  const {
    value: enteredEmail,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(emailValidation);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();

    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);

    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const getInputClasses = isInvalid => {
    return isInvalid ? 'form-control invalid' : 'form-control';
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={getInputClasses(firstNameHasError)}>
          <label htmlFor='firstname'>First Name</label>
          <input
            type='text'
            id='firstname'
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameHasError && (
            <p className='error-text'>Name must not be empty.</p>
          )}
        </div>
        <div className={getInputClasses(lastNameHasError)}>
          <label htmlFor='lastname'>Last Name</label>
          <input
            type='text'
            id='lastname'
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameHasError && (
            <p className='error-text'>Name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={getInputClasses(emailHasError)}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && (
          <p className='error-text'>Please enter valid email.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
