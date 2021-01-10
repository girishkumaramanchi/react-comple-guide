import React from "react"

const userInput = (props) => {

    const style = {
        marginTop: "6px",
        height: "30px",
        width: "300px"
    }

    return(
        <div>
            <label>Username: </label>
            <input 
                type="text" 
                onChange={props.changed} 
                value={props.name} 
                style={style}
            ></input>
        </div>
    )
}

export default userInput;