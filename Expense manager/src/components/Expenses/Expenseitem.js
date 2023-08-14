/* eslint-disable no-unused-vars */
import './Expenseitem.css'
import Expensedate from './Expensedate';
import Card from '../UI/Card';
import { useState } from 'react';

function ExpenseItem(props) {

    const [title,settitle]= useState(props.title);


    const clickhandler =()=>{
       
        settitle('shubh')
    }

    
    return (
        <li>
        <Card className="expense-item">

            <Expensedate date={props.date}> </Expensedate>

            <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amount}</div>
            <button onClick={clickhandler}>Change Title</button>
            </div>
        </Card>
        </li>
    );
}

export default ExpenseItem 