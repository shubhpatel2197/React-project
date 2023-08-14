/* eslint-disable no-unused-vars */

import style from  './Table.module.css'
import { useState } from 'react';
import Form from './Form';
import Errorbox from './Errorbox'
import Output from './Output';



const Table = (props) => { 

  const [username,setusername] = useState('');
  const [age,setage] = useState('');
  const [valid,setvalid] = useState(false);


  const [dataarray,newdataarray] = useState(props.data)
 

  const submited = (data)=>{
    const username = data.username
    const age = data.age
    const newdata = [];

    if(!username || age<0){
        setvalid(true);
    }
    else{

      const key = Math.random();
      const s = {
        username,
        age,
        key
      }
      

      newdataarray((prevdata)=>{
        return [s, ...prevdata]
    })
     

    

      
      
    }

  }

  const okay= () =>{
    setvalid(false);
  }

    return (
      <div>
        <div className={`${style.out} ${valid&& style.blu}`} >
    
          <Form onsubmit={submited}/>

         { dataarray.map((data)=>
        <Output username={data.username}
        age={data.age}></Output>) } 
      

         
        
        </div>

         {valid && <Errorbox okay={okay}/>}
         </div>

    );
}

export default Table