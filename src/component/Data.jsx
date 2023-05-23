import './Data.css';
 
const Data = () => {
    var showdate = new Date();
    var displaytodaysdate = showdate.getDate() + '/' + (showdate.getMonth()+ 1) + '/' + showdate.getFullYear();
    return(
        <div className='date'>
            <input type="text"  value={`          ${displaytodaysdate}`} readOnly = "true"/>
            
        </div>
    )
}

export default Data;