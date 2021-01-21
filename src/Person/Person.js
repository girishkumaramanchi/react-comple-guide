import React from "react"
// import Radium from "radium"
// import Styled from "styled-components"
import personClasses from "./Person.css";

// const StyledDiv = Styled.div`
//     width: 60%;
//     margin: 10px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;

//     @media (min-width: 500px) {
//         width:450px
//     }

// `;

const person = (props) => {

    const style = {
        "@media (min-width: 500px)" : {
            width:"450px"
        }
    };

    return( 
        // <StyledDiv>
        // <div className={personClasses.Person}>
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old. My lucky number is {Math.floor(Math.random() * 30)}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
            {/* <hr /> */}
            <button className="button">X</button>
        </div>
        // </StyledDiv>
    )
}

// export default Radium(person);
export default person;