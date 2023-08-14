/* eslint-disable no-unused-vars */
import Expenses from "./components/Expenses/Expenses";
import Newexpense from "./components/NewExpense/Newexpense";
import { useState } from "react";

const dummyexpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2',
   title: 'New TV', 
   amount: 799.49,
   date: new Date(2021,3, 12)
   },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294,
    date: new Date(2021, 2, 23),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {

  const [expenses,newexpenses]=useState(dummyexpenses)
  

  const addexpensehandler = expense =>{
   
    newexpenses((prevexpenses)=>{
        return [expense, ...prevexpenses]
    })
  }


  return (

    <div>

      <Newexpense onaddexpense={addexpensehandler}/>
      <Expenses items={expenses}></Expenses>

    </div>


  );
}

export default App;
