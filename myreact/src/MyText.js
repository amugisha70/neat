import React from 'react';

class MyText extends React.Component {
    constructor (){
        super();
        this.state = {
            color: "red",
            type: 'ford',
            brand: 'jeep'
        };
    }
    MyBtn =()=> this.setState({color: "blue"})
    render () {
        return (
             <>
                <p>The color is {this.state.color}</p>
                <button onClick={this.MyBtn}>change color</button>
            </>);
        }
}
export default MyText; 

