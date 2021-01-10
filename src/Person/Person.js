import React from "react"
import "./Person.css";

const person = (props) => {
    return( 
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old. My lucky number is {Math.floor(Math.random() * 30)}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
            {/* <hr /> */}
        </div>
    )
}

export default person;