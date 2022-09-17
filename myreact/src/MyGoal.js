import React from "react";
var x =1;

function MyCars(props) {
    
    
    return (
        <>
            <li>{x++} and {props.cars1}</li>
        </>
    );
}
 
function MyGoal (){

    const cars = [
        { id: 1, brand:'BMW'},
        { id: 2, brand: 'Benz'},
        { id:3, brand: 'Ford'}
        ];

   
    return (
        <>
        
            <ul>
                {cars.map((car)=>
                
                <MyCars key ={car.id}  cars1={car.brand}/>
            )
            }  
            </ul>
        </>
    );

}
export default MyGoal;