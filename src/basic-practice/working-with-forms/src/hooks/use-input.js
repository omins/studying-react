import { useState } from 'react';

const useInput = validate => {
  const [enteredValue, setEnteredValue] = useState('');
  const [inputTouched, setInputTouched] = useState(false);

  const valueIsValid = validate(enteredValue);
  const hasError = !valueIsValid && inputTouched;

  const inputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = event => {
    setInputTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setInputTouched(false);
  };

  return {
    value: enteredValue,
    valueIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
