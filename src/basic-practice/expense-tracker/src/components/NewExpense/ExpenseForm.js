import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = props => {
  const { onSaveExpenseData, isOpened, formOpenHandler } = props;
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value)
  };
  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value);
  }
  const dateChangeHandler = event => {
    setEnteredDate(event.target.value);
  }

  const resetFormInput = () => {
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  const submitHandler = event => {
    event.preventDefault();
    
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }

    onSaveExpenseData(expenseData);
    resetFormInput();
    formOpenHandler();
  }

  const resetHandler = event => {
    resetFormInput();
    formOpenHandler();
  }

  if (isOpened) {
    return (
    <form onSubmit={submitHandler} onReset={resetHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} value={enteredTitle}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='1' step='1' onChange={amountChangeHandler} value={enteredAmount}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} value={enteredDate}/>
        </div>
      </div>
      <div className='new-expense__actions-wrapper'>
        <div className='new-expense__actions' style={{display: "inline-block"}}>
          <button type='reset'>Cancel</button>
        </div>
        <div className='new-expense__actions' style={{display: "inline-block"}}>
          <button type='submit'>Add Expense</button>
        </div>
      </div>
    </form>
    )
  } else {
    return (
      <div className='new-expense__actions' style={{display: "flex", justifyContent: "center"}}>
          <button type='submit' onClick={formOpenHandler}>Add New Expense</button>
      </div>
    )
  }
}

export default ExpenseForm;