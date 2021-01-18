import React from "react"
import Radium from "radium"
import "./Person.css";

const person = (props) => {

    const style = {
        "@media (min-width: 500px)" : {
            width:"450px"
        }
    };

    return( 
        <div className="Person" style={style} >
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old. My lucky number is {Math.floor(Math.random() * 30)}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
            {/* <hr /> */}
        </div>
    )
}

export default Radium(person);