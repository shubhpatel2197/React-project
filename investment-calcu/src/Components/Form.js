/* eslint-disable no-unused-vars */

import './Form.css'
import { useState } from 'react';

const Form = (props) => {

    const [currsaving,setcurrsaving] = useState('');
    const [yearlysaving,setyearlysaving] = useState('');
    const [exinterest,setexinterest] = useState('');
    const [invduration,setinvduration] = useState('');


    const setcurrsavinghandler = (event) =>{
        setcurrsaving(event.target.value)
    }
    const setyearlysavinghandler = (event) =>{
        setyearlysaving(event.target.value)
    }
    const setexinteresthandler = (event) =>{
        setexinterest(event.target.value)
    }
    const setinvdurationhandler = (event) =>{
        setinvduration(event.target.value)
    }

    const submitted = (event) =>{
        event.preventDefault();

       const data = {
            currsaving,
            yearlysaving,
            exinterest,
            invduration
       }

       props.onsubmit(data)

        setcurrsaving('');
        setinvduration('');
        setexinterest('');
        setyearlysaving('');
    }

    const reset = () => {
        setcurrsaving('');
        setinvduration('');
        setexinterest('');
        setyearlysaving('');
    }
    



    return (
        <div class="all">
            <form onSubmit={submitted} className='parent'>
                <div className="form-inputs">
                    <div className="form-input">
                        <label htmlFor="">Current Saving</label>
                        <input type="number" value={currsaving}
                        onChange={setcurrsavinghandler}/>
                    </div>
                    <div className="form-input">
                        <label htmlFor="">Yearly Saving</label>
                        <input type="number"
                        value={yearlysaving}
                        onChange={setyearlysavinghandler} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="">Expexted Interest</label>
                        <input type="number" 
                         value={exinterest}
                        onChange={setexinteresthandler}/>
                    </div>
                    <div className="form-input">
                        <label htmlFor="">Investment Duration</label>
                        <input type="number" 
                        value={invduration}
                        onChange={setinvdurationhandler}/>
                    </div>


                </div>
                <div className='buttons'>
                <button onClick={reset}type="submit" >Reset</button>

                <button type="submit" >Calculate</button>
                </div>
            </form>
        </div>
    );
}

export default Form