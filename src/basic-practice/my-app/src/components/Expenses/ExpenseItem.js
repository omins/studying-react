import React, { useState } from 'react';
import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = props => {
  const [title, setTitle] = useState(props.title);
  console.log('rendered')
  const { date, amount } = props;
  
  const clickHandler = () => {
    setTitle('Updated')
  }

  return (
  <Card className='expense-item'>
    <ExpenseDate date={date}/>
    <div className='expense-item__description'>
      <h2>{title}</h2>
      <div className='expense-item__price'>{amount}</div>
    </div>
    <button onClick={clickHandler}>Click Here</button>
  </Card>);
}

export default ExpenseItem;