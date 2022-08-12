import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import "./Expenses.css";

const Expenses = props => {
  const { expenses } = props;
  return (
    <Card className="expenses">
      {expenses.map(el => {
        return <ExpenseItem
        title={el.title}
        date={el.date} 
        amount={el.amount}
        key={el.id}
        />
      })}
    </Card>
  );
}

export default Expenses