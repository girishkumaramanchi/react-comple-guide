import React, { Component } from 'react';
import Person from "./Person/Person"
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="App-title">Welcome to React</h1>
        <p>I'm React App</p>
        <p>I'm learning React</p>
        <Person />
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
