import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = props => {
  const { expenses } = props;
  const chartDataPoints = [
    {label: 'Jan', value: 0, id: 0},
    {label: 'Feb', value: 0, id: 1},
    {label: 'Mar', value: 0, id: 2},
    {label: 'Apr', value: 0, id: 3},
    {label: 'May', value: 0, id: 4},
    {label: 'Jun', value: 0, id: 5},
    {label: 'Jul', value: 0, id: 6},
    {label: 'Aug', value: 0, id: 7},
    {label: 'Sep', value: 0, id: 8},
    {label: 'Oct', value: 0, id: 9},
    {label: 'Nov', value: 0, id: 10},
    {label: 'Dec', value: 0, id: 11}
  ];

  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints}/>
}

export default ExpensesChart;