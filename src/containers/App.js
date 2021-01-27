import React, { Component } from 'react';
// import Person from "../components/Persons/Person/Person"
import Cockpit from "../components/Cockpit/Cockpit"
import Persons from "../components/Persons/Persons"
import Users from "../components/Users/Users"
import appClasses from './App.css';

class App extends Component {
  constructor(props){
    super(props);
    console.log("[App.js] constructor");
    // this.state = {};
  }

  state = {
    persons: [
      { name:"Tatsuya", age:18 },
      { name:"Miyuki", age:17 },
      { name:"Lina", age:17 },
      { name:"X", age:undefined }
    ],
    otherState: "some other value",
    username:[
      {name:"A", like:"One Piece"},
      {name:"B", like:"Bleach"},
    ],
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  // componentWillMount() {
  //   console.log("[App.js] component  will Mounte");
  // }

  componentDidMount() {
    console.log("[App.js] component Mounted");
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("[App.js] shouldComponentUpdate");
    // return true;
    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[App.js] getSnapshotBeforeUpdate");
    return {message: "App snapshot!"};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[APP.js] componentDidUpdate");
    console.log(snapshot);
  }

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons:persons
    })
  }
  
  changeNameHandler = (event, index) => {
    const persons = [...this.state.persons];
    persons[index].name = event.target.value;
    this.setState({persons:persons});
  }

  switchUserNameHandler = (event, name) => {
    const index = this.state.username.findIndex(user => {
      return user.name === name;
    })
    const user = {
      ...this.state.username[index]
    }
    user.name = event.target.value;
    const users = [...this.state.username];
    users[index] = user;
    this.setState({username:users});
    // using index
    // const users = [...this.state.username];
    // users[index].name = event.target.value;
    // this.setState({username:users});
  }

  togglePesonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    console.log("[App.js] render start");
    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler} 
            changed={this.changeNameHandler}
          >
          </Persons>
        </div> 
      );
    }

    let users = (
      <div>
        <Users username={this.state.username}
               switchUserNameHandler={this.switchUserNameHandler}
        >
        </Users>
      </div>
    );

    return (
        <div className={appClasses.App}>
          <Cockpit title={this.props.appTitle}
                   persons={this.state.persons} 
                   showPersons={this.state.showPersons} 
                   togglePesonsHandler={this.togglePesonsHandler}
          >
          </Cockpit>
          {persons}
          {users}
        </div>
    );
  }
}

export default App;

