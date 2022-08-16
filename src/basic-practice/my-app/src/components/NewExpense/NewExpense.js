import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
  const { onAddExpense } = props;
  const [formOpened, setFormOpened] = useState(false);

  const formOpenHandler = () => {
    setFormOpened(!formOpened);
  }

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    onAddExpense(expenseData);
  }
  
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} isOpened={formOpened} formOpenHandler={formOpenHandler}/>
    </div>
  )
}

export default NewExpense