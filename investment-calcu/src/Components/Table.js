/* eslint-disable no-unused-vars */

import './Table.css'
import { useState } from 'react';
import Form from './Form';

const Table = (props) => { 

    const [year,setyear] = useState('34');
    const [yearlysaving,setyearlysaving] = useState('34');
    const [exinterest,setexinterest] = useState('34');
    const [invduration,setinvduration] = useState('34');

   
    

    
    
    
    const submited = (data) =>{
     
       setyear(data.invduration);
        // const totsaving = data.yearlysaving*year;
        // const interest = (data.yearlysaving*data.exinterest)/100;
        // const totinterest = (totsaving*data.exinterest)/100;
        // const invcap = totsaving

    }




    return (
        <div className='all2' >
            <Form onsubmit={submited} />

     <table className="result">
        <thead >
          <tr className="thead">
            <th className="t1">Year</th>
            <th className="t1">Total Savings</th>
            <th className="t1">Interest (Year)</th>
            <th className="t1">Total Interest</th>
            <th className="t1">Invested Capital</th>
          </tr>
        </thead>

        <tbody className="tbody">
          <tr>
            <td className="t2">3434</td>
            <td className="t2" >3434</td>
            <td className="t2">3434</td>
            <td className="t2">3434</td>
            <td className="t2">3434</td>
          </tr>
        </tbody>

      </table>

        </div>
    );
}

export default Table