import React from "react"
import "./UserOutput.css"

const userOutput = (props) => {
    console.log("[UserOutput.js] rendering");
    return(
        <div className="userOutput">
            <p>Username: {props.name}</p>
            <p>LIke: {props.like}</p>
        </div>
    )
}

export default userOutput;