import { useState } from 'react';
import './Expenseform.css'

const Expenseform = (props) => {

    const [title,settitle] = useState('');
    const [amount,setamount] = useState('');
    const [date,setdate] = useState('');

    const titlechangehandler = (event) =>{
        settitle(event.target.value)
    }
    const amountchangehandler = (event) =>{
        setamount(event.target.value)
    } 
    const datechangehandler = (event) =>{
        setdate(event.target.value)
    }

    


    const submitHandler = (event) =>{
        event.preventDefault();
        const expensedata = {
            title:title,
            amount:amount,
            date: new Date(date)
        }
    
        props.onsaveexpensedata(expensedata)
        setdate('');
        setamount('');
        settitle('');

        

        // return <div></div>
        
    }

  

    return<div>
    
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text"  
                value={title}
                onChange={titlechangehandler}/>
            </div>
            <div className="new-expense__control">
                <label >Amount</label>
                <input type="number" min="0.01" step="0.01" 
                value={amount}
                onChange={amountchangehandler} />
            </div>
            <div className="new-expense__control">
                <label >Date</label>
                <input type="date" min="2019-01-01" max="2022-12-21" 
                value={date}
                onChange={datechangehandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit" >Add Expense </button>
            <button type="submit" onClick={props.oncancel}>Cancel </button>
        </div>
        
    </form>

    
    </div>
}

export default Expenseform