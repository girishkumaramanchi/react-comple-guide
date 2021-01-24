import React from "react";
import cockpitClasses from "./Cockpit.css"

const cockpit = (props) => {

    let btnClass = "";
    const classes = [];
    
    if(props.showPersons){
        btnClass = cockpitClasses.Red;
    }

    if(props.persons.length <= 2){
        classes.push(cockpitClasses.red);      // classes = ["red"]
    }
    if(props.persons.length <= 1){
        classes.push(cockpitClasses.bold);    // classes = ["red", "bold"]
    }

    return (
        <div className={cockpitClasses.Cockpit}>
            <h1 className="App-title">Welcome to React</h1>
            <p>I'm React App</p>
            <p className={classes.join(" ")} >I'm learning React</p>
            <button className={btnClass} onClick={props.togglePesonsHandler}>
              Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;