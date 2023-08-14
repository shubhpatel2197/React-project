
import ExpenseItem from "./Expenseitem"
import './Expenseslist.css'

const Expenseslist = (props) =>{
  

  if(props.items.length===0){
    return <h2 className="expenses-list__fallback">NO EXPENSES</h2>
  }

  return <ul className="expenses-list">
    {
    props.items.map(expense => 
      <ExpenseItem
      key={expense.id} //key is important otherwise js dont recognise old items of array and update all items whenever new item is added
      title={expense.title}
      amount={expense.amount}
        date={expense.date} />)
  }
  </ul>

}

export default Expenseslist