import React from "react";

const cockpit = (props) => {
    return (
        <div>
            <h1 className="App-title">Welcome to React</h1>
            <p>I'm React App</p>
            <p className={props.classes.join(" ")} >I'm learning React</p>
            <button className={props.btnClass} onClick={props.togglePesonsHandler}>
              Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;