import React from "react";
import Person from "./Person/Person"

const Persons = (props) => (
    props.persons.map((person, index) =>{
        return <Person name={person.name} 
                    age={person.age} 
                    click={() => props.clicked(index)} 
                    change={(event) => props.changed(event, index)}
                    key={index}
                >
                </Person>
    })
);


export default Persons;