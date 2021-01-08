import React, { useState } from 'react';
import Person from "./Person/Person"
// import logo from './logo.svg';
import './App.css';

const App = props => {
    const [ personsState, updatedPersonsState] = useState(
      {
        persons: [
          { name:"Tatsuya", age:18 },
          { name:"Miyuki", age:17 },
          { name:"Lina", age:17 },
          { name:"X", age:undefined }
        ],
        // otherState: "some other value"
      }
    );

    const [ otherState, updatedOtherState] = useState("some other value");

    console.log(personsState, otherState);

    const switchNameHandler = () => {
      // console.log("name changed");
      // Don't do this: this.state.persons[0].name = "Shiba Tatsuya";
      updatedPersonsState({
        persons: [
          { name:"Shiba Tatsuya", age:18 },
          { name:"Miyuki", age:17 },
          { name:"Lina", age:17 },
          { name:"X", age:undefined }
        ],
        // otherState: personsState.otherState
      });
    };

    return (
      <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="App-title">Welcome to React</h1>
        <p>I'm React App</p>
        <p>I'm learning React</p>
        <button style={{color:'blue'}} onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}  click={switchNameHandler}>I love Shiba Tatuya</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} >I'm Half American Half Japanese</Person>
        <Person name={personsState.persons[3].name} age={personsState.persons[3].age} />
        {/* <Person name="Miyuki" age="17" />
        <Person name="Lina" age="17" >I'm Half American Half Japanese</Person>
        <Person name="X" age="Unknown" /> */}
        {/* <Person></Person> */}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
    // return React.createElement('div', {className:"App"}, React.createElement('h1',null,  'I\'m React App'));
}

export default App;

