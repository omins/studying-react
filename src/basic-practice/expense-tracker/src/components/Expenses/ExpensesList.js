import React from 'react';
import "./ExpensesList.css";
import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {
  const { filteredExpenses } = props;
  
  if (filteredExpenses.length === 0) {
    return <p className='expenses-list__fallback'>No Expenses Found.</p>
  } else {
    return (
    <ul className='expenses-list'>
      {filteredExpenses.map(el => <ExpenseItem 
        title={el.title} 
        date={el.date} 
        amount={el.amount} 
        key={el.id}/>)
      }
    </ul>
    )
  }
};

export default ExpensesList;