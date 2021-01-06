import React from "react"

const person = (props) => {
    return( 
        <div>
            <p>I'm {props.name} and I'm {props.age} years old. My lucky number is {Math.floor(Math.random() * 30)}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;