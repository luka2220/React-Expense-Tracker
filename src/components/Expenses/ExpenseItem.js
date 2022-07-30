import React from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

// we need one var arg for props to be able to be passed 
// from another component. The var name can be anything,
// but typically it is named props

const ExpenseItem = (props) => {
    return(
        <li>
            <Card className='expense-item'>
                <ExpenseDate
                    date={props.date}
                />

                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;