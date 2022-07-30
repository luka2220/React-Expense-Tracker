import React, { useState } from 'react';

import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const expensesDateFilterHanlder = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expenses => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  return(
    <div>
      <Card className="expenses">
        {/* Component below is an example of a controlled component */}
        <ExpensesFilter 
          selectedYear={filteredYear} 
          onSaveDateFilter={expensesDateFilterHanlder}  
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;