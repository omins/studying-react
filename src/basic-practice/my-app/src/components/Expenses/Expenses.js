import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import "./Expenses.css";

const Expenses = props => {
  const { expenses } = props;
  const [filteredYear, setFilteredYear] = useState('2019');

  const filteredYearChangeHandler = year => {
    console.log('In expenses');
    console.log(year)
    setFilteredYear(year);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onFilteredYearChange={filteredYearChangeHandler} filtered={filteredYear}/>
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