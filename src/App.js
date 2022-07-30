import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });

    console.log(expenses)
  };

  return (
    <div>
      <h1 className="title">Expenses Tracker</h1>
      <NewExpense addExpense={addExpenseHandler}/>
      <Expenses
        items={expenses}
      />  
    </div>
  );
}

export default App;
