import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const NewUserControls = styled.div`
  display: flex;
  flex-direction: column;
`

const NewUserControl = styled.div`
  display: flex;
  flex-direction: column;
  & label {
    font-weight: 600;
    font-size: 24px;
  }

  & input {
    margin-top: 8px;
    padding: 10px;
    height: 35px;
    border: 1px solid rgba(0,0,0,0.5);
  }

  & + & {
    margin-top: 10px;
  }
`

const NewUserActions = styled.div`
  padding: 15px 15px 15px 0;
`

const SubmitButton = styled(Button)`
  width: 100px;
  height: 40px;
`

const NewUserForm = props => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const { onUserRegister, onInvalidUser } = props;
  
  const usernameChangeHandler = event => {
    setEnteredUsername(event.target.value);
  }
  const ageChangeHandler = event => {
    setEnteredAge(event.target.value);
  }

  const resetInputs = () => {
    setEnteredUsername('');
    setEnteredAge('');
  }

  const submitHandler = event => {
    event.preventDefault()

    if (enteredUsername.trim().length === 0) {
      onInvalidUser(prev => {
        return {
          isActive: true,
          message: 'Please enter Username.'
        }
      })
      return
    }

    if (enteredAge.trim().length === 0 || Number(enteredAge) < 1) {
      onInvalidUser(prev => {
        return {
          isActive: true,
          message: 'Age must be older than 0',
        }
      })
      return
    }

    const newUser = {
      id: Math.random(),
      name: enteredUsername,
      age: enteredAge
    };

    onUserRegister(newUser);
    resetInputs();
  }

  return (
    <form onSubmit={submitHandler} style={{position: "relative"}}>
      <NewUserControls>
        <NewUserControl>
          <label>Username</label>
          <input type='text' onChange={usernameChangeHandler} value={enteredUsername}></input>
        </NewUserControl>
        <NewUserControl>
          <label>Age</label>
          <input type='number' onChange={ageChangeHandler} value={enteredAge}></input>
        </NewUserControl>
      </NewUserControls>
      <NewUserActions>
        <SubmitButton type='submit'>Add User</SubmitButton>
      </NewUserActions> 
    </form>
  )
}

export default NewUserForm;