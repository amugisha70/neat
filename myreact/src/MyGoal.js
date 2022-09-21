import React from "react";

function MyGoal (){
    let day;
    switch (new Date().getDay()){
        case 0:
            day = 'Sunday';
            break;
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3: 
            day = 'Wednesday';
            break;
        default:
            day = 'just another day';
    }
    
    
        return(
        <>
            
            <h1>Today is {day}</h1> 
            <p id="onc"></p>   
        </>
    )
}
export default MyGoal;