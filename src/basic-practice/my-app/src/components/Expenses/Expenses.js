import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import "./Expenses.css";

const Expenses = props => {
  const { expenses } = props;
  const [filteredYear, setFilteredYear] = useState('2021');
  const filteredExpenses = expenses.filter(el => el.date.getFullYear().toString() === filteredYear)

  const filteredYearChangeHandler = year => {
    setFilteredYear(year);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onFilteredYearChange={filteredYearChangeHandler} filtered={filteredYear}/>
      {filteredExpenses.map(el => {
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