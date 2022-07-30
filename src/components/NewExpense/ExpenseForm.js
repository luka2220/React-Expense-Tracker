import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // ussing state once to change multiple values
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     eneteredAmount: '',
    //     eneteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        // getting the title inputted by user and setting to title
        // i.e event.target.value will get the onChange value from 
        // this input field where the function is being called
        setEnteredTitle(event.target.value);  
        // must also set value of other 2 key or they would get lost
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     };
        // });
    };

    const amountChangeHandler = (event) => {
        // setting amount to new input value
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });
    };

    const dateChangeHandler = (event) => {
        // setting date to new input value
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
    };

    const submitHandler = (event) => {
        // this method will prevent the request being sent to
        // the server hosting the site (i.e page will not be
        // reloaded/refreshed when form is submitted)
        event.preventDefault();

        // creating an object and setting its values to current
        // valus of each state
        const expenseData = {
            title: enteredTitle,
            amount: parseFloat(enteredAmount),
            date: new Date(enteredDate)
        };

        // Calling a function from NewExpense.js that will save 
        // the expense data in that component to be able to 
        // send and save the expense data in App.js
        //
        // This is and example of Child-to-Parent component
        // communication (Bottom-up)
        props.onSaveExpenseData(expenseData);

        // setting all the states back to empty, as this function
        // is executed once the form is submited
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        // debugging expenseData object
        //console.table(expenseData);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                        type='text' 
                        value={enteredTitle} 
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                        type='number' 
                        min='0.01' step='0.01' 
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                        type='Date' 
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;