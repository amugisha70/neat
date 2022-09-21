import React from "react";

import { useState } from "react";

function MyDisplay (props){
    const myname = props.myname;
    return (
        <>
            <h1> {myname}, PRAISE THE LORD! </h1> 
        </>
    )
}

function MyApp () {
    const [name1, setName] = useState('');
    const [status1, setStatus] =useState(false);
    const [name3, setName3] = useState('');

    const displayName = (event) => {
        event.preventDefault();
        setStatus(true);
        setName3(name1);

    }

    var name2;
    return (
        <>
            <form onSubmit={displayName}>
                <input 
                    type='text'
                    value={name2}
                    onChange={e => setName(e.target.value)}>

                </input>
                <input type='submit' ></input>
            </form>

            {status1 && <MyDisplay myname={name3} />}
        </>
    )

}
export default MyApp;