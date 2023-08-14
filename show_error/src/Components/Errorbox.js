import './Errorbox.css'




const Errorbox = (props) => { 

    

   

 
    return (
       
       
        <div className="error">

            <h1 className="line">Error</h1>

       <button className="butt" onClick={props.okay}>Okay</button>

       
        
        </div>
    );
}

export default Errorbox

