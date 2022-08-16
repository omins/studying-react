import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
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
      <ExpensesList filteredExpenses={filteredExpenses}/>
    </Card>
  );
}

export default Expenses