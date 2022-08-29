import useInput from '../hooks/use-input';

const SimpleInput = props => {
  const {
    value: enteredName,
    valueIsValid: enteredNameIsValid,
    hasError: nameIsInvalid,
    inputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameInputReset,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    hasError: emailIsInvalid,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailInputReset,
  } = useInput(value => value.includes('@'));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();

    console.log(enteredName);
    console.log(enteredEmail);

    nameInputReset();
    emailInputReset();
  };

  const getInputClasses = isInvalid => {
    return isInvalid ? 'form-control invalid' : 'form-control';
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={getInputClasses(nameIsInvalid)}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameIsInvalid && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className={getInputClasses(emailIsInvalid)}>
        <label htmlFor='email'>Email address</label>
        <input
          type='email'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailIsInvalid && (
          <p className='error-text'>Email must contains '@'.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
