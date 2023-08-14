import './Chartbar.css'

const Chartbar = (props) =>{
    

    let barfillheight = '0%'

    if(props.maxvalue > 0){
        console.log(props.maxvalue)
        barfillheight = (Math.round((props.value/props.maxvalue)*100))+ '%';
        console.log(barfillheight)
    }

    return <div className="chart-bar">
        <div className="chart-bar__inner">

            <div className="chart-bar__fill" 
            style={{height:barfillheight}}></div>


        </div>
            <div className="chart-bar__label">{props.label}</div>
    </div>
}

export default Chartbar