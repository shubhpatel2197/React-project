/* eslint-disable no-unused-vars */

import './Form.css'
import { useState } from 'react';

const Form = (props) => {

    const [username,setusername] = useState('');
    const [age,setage] = useState('');
   

    const setusernamehandler = (event) =>{
        setusername(event.target.value)
    }
    const setagehandler = (event) =>{
        setage(event.target.value)
    }
   

    const submitted = (event) =>{
        event.preventDefault();

       const data = {
           username,
           age
       }

       props.onsubmit(data)

        setusername('');
        setage('');
      
    }


    return (
        <div class="all">
            <form onSubmit={submitted} className='parent'>
                <div>
                    <div >
                        <label className="label" htmlFor="">Username</label>
                        <input className="form-inputs" type="text" value={username}
                        onChange={setusernamehandler}/>
                    </div>
                    <div >
                        <label className="label"  htmlFor="">Age</label>
                        <input className="form-inputs" type="number"
                        value={age}
                        onChange={setagehandler} />
                    </div>
                
                </div>

                <div className='buttons'>
                
                <button type="submit" >Add User</button>
                
                </div>
            </form>
        </div>
    );
}

export default Form