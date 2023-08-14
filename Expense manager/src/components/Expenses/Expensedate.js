import './Expensedate.css'

function Expensedate(props){

    var month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
    
    const day = props.date.toLocaleString('en',{day:'2-digit'})
    const year = props.date.getFullYear();


    return (
        <div> 
            <div className="expense-date">
                <div className="expense-date__month">{month[props.date.getMonth()-1]}</div>
                <div className="expense-date__year">{year}</div>
                <div className="expense-date__day">{day}</div>
            </div>

        </div>
    );
}

export default Expensedate