import React, {Component} from "react"
import personClasses from "./Person.css";

class Person extends Component {
    render(){
    console.log("[Person.js] rendering");
    return( 
        <div className={personClasses.Person}>
            <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old. My lucky number is {Math.floor(Math.random() * 30)}</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.change} value={this.props.name} />
            <button className="button">X</button>
        </div>
    )
    }
}

export default Person;