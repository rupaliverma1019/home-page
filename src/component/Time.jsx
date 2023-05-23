import './Time.css';
import React, { useState } from "react";


const Time = () => {
    //let time = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState();
    
    const UpdateTime = () => {
       let time = new Date().toLocaleTimeString();

        setCtime(time);
    };
    setInterval(UpdateTime,1000); 


    return (
        <div>
            <h1>{ctime}</h1>
            
            

        </div>
    )
}
export default Time;