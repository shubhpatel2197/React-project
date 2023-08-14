import './Newexpense.css'
import {useState} from 'react';

import Expenseform from './Expenseform';

const Newexpense = (props) =>{

    const [isediting,setisediting] = useState(false);

    const saveexpensedatahandler = (enteredexpensedata) =>{
        const expensedata ={
            id:Math.random().toString(),
            ...enteredexpensedata
        } 
        props.onaddexpense(expensedata)
        setisediting(false);
    }

    const starteeditinghandler = () =>{
        setisediting(true);
    }
    const stopeditinghandler = () =>{
        setisediting(false);
    }
    return <div className="new-expense">
    {!isediting && <button onClick={starteeditinghandler}>Add New Expense</button>}
    {isediting && <Expenseform onsaveexpensedata={saveexpensedatahandler} oncancel={stopeditinghandler}></Expenseform>}
    </div>

}

export default Newexpense;