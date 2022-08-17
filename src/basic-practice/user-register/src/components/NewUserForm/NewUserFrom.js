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
  
  & button {
    width: 100px;
    height: 40px;
  }
`

const NewUserForm = props => {
  const submitHandler = event => {
    event.preventDefault()
  }

  return (
    <form onSubmit={submitHandler} style={{position: "relative"}}>
      <NewUserControls>
        <NewUserControl>
          <label>Username</label>
          <input type='text'></input>
        </NewUserControl>
        <NewUserControl>
          <label>Age</label>
          <input type='number' min='1' step='1'></input>
        </NewUserControl>
      </NewUserControls>
      <NewUserActions>
        <Button type='submit'>Add User</Button>
      </NewUserActions> 
    </form>
  )
}

export default NewUserForm;