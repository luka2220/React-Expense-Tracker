import React, { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isEditing, setisEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.round(Math.random() * 100).toString(),
            ...enteredExpenseData
        };

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
