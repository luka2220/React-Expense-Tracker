import React, { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isEditing, setisEditing] = useState(false);

    // Function will be executed in ExpenseForm where the expense
    // data that is submitted from the form will be passed as an
    // argument => Child-to-Parent Component Communication
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            // adding all the previous expenseData => {title, amount, date}
            id: Math.round(Math.random() * 100).toString(),  // id will be set to a random nnumber
            ...enteredExpenseData
        };

        //console.table(expenseData);
        props.addExpense(expenseData);
        
        setisEditing(false);
    };

    const startEditingHandler = () => {
        setisEditing(true);
    };

    const stopEditingHandler = () => {
        setisEditing(false);
    };

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add new expense</button>}
            {isEditing && (
                <ExpenseForm 
                    onCancel={stopEditingHandler} 
                    onSaveExpenseData={saveExpenseDataHandler} 
                />
            )}
        </div>
    );
};

export default NewExpense;