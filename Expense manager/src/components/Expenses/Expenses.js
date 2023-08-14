/* eslint-disable no-unused-vars */
import './Expenses.css'
import Expensechart from './Expenseschart';
import Expenseslist from './Expenseslist';
import Card from '../UI/Card';
import ExpensesFilter from './Expensefilter';
import { useState } from 'react'

function Expenses(props) {

  const [filteryear, setfilteryear] = useState('2021')

  const filterchangehandler = (selectedyear) => {
    setfilteryear(selectedyear)
  }

  const filteredexpenses = props.items.filter(expense=>{
    
    return expense.date.getFullYear().toString() === filteryear;
  })

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteryear}
          onchangeyear={filterchangehandler}></ExpensesFilter>
          <Expensechart expenses={filteredexpenses}></Expensechart>
       <Expenseslist items={filteredexpenses}/>
      </Card>
    </div>
  );
}

export default Expenses