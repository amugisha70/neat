import React from "react";
//import { Component } from "react";

class MyApp extends React.Component {
    constructor(){
        super();
        this.state = {favcolor: 'red'};
    }
    
    componentDidMount () {
        setTimeout(() => this.setState({favcolor: "green"}), 1500);
    }
    componentDidUpdate (){
        document.getElementById("div222").innerText = "The favorite color has been updated to "+ this.state.favcolor; 
    }
    render(){
        return (
            <>
                <h1>Changing the Fav Color</h1>
                <p>{this.state.favcolor}</p>
                <div id="div222"></div>
            </>
        )
    };
}
export default MyApp;