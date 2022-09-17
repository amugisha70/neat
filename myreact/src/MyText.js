import React from 'react';
import { useState } from 'react';

function NameShow (props){
    const myname = props.myname;
    return (
        <>
        <h1>{myname}, PRAISE THE LORD!</h1>
        </>
    );
}

function MyText () {

    const [name1 , setName] = useState("");
    const [val1, setVal] = useState(false);
    
    const NameShow1 = (event) => {
       event.preventDefault();
        setVal(true);
    }
    return (
        <>
            <form onSubmit={NameShow1}>
                <label>What is Your Name?</label>
                <input type='text'  value={name1} onChange={(e)=>setName(e.target.value)}></input>
                <input type="submit"></input>
                
            </form>
            { val1 && <div><NameShow myname={name1} /></div>}
            
        </>
    )
}
export default MyText;