import React, { Component } from 'react';
import Person from "./Person/Person"
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name:"Tatsuya", age:18 },
      { name:"Miyuki", age:17 },
      { name:"Lina", age:17 },
      { name:"X", age:undefined }
    ],
    otherState: "some other value"
  }

  switchNameHandler = () => {
    // console.log("name changed");
    // Don't do this: this.state.persons[0].name = "Shiba Tatsuya";
    this.setState({
      persons: [
        { name:"Shiba Tatsuya", age:18 },
        { name:"Miyuki", age:17 },
        { name:"Lina", age:17 },
        { name:"X", age:undefined }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="App-title">Welcome to React</h1>
        <p>I'm React App</p>
        <p>I'm learning React</p>
        <button style={{color:'blue'}} onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler} >I love Shiba Tatuya</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} >I'm Half American Half Japanese</Person>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
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
}

export default App;

