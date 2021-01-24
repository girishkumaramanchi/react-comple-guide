import React, { Component } from 'react';
// import Person from "../components/Persons/Person/Person"
import Cockpit from "../components/Cockpit/Cockpit"
import Persons from "../components/Persons/Persons"
import Users from "../components/Users/Users"
import appClasses from './App.css';

class App extends Component {
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
    // this.setState({
    //   username:[
    //     {name:event.target.value, like:"One Piece"},
    //     {name:"B", like:"Naruto"},
    //   ]
    // })
  }

  togglePesonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {


      let btnClass = "";

    let persons = null;

    if(this.state.showPersons){
      btnClass = appClasses.Red;
      persons = (
        <div>
          return  <Persons persons={this.state.persons}
                  clicked={this.deletePersonHandler} 
                  changed={this.changeNameHandler}
                  >
                  </Persons>
          {/* {this.state.persons.map((person, index) =>{
            return <Person name={person.name} 
                    age={person.age} 
                    click={() => this.deletePersonHandler(index)} 
                    change={(event) => this.changeNameHandler(event, index)}
                    key={index}
                  >
                  </Person>
          })} */}
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

     const classes = [];

     if(this.state.persons.length <= 2){
      classes.push(appClasses.red);      // classes = ["red"]
     }
     if(this.state.persons.length <= 1){
       classes.push(appClasses.bold);    // classes = ["red", "bold"]
     }

    return (
        <div className={appClasses.App}>
          <Cockpit btnClass={btnClass} classes={classes} togglePesonsHandler={this.togglePesonsHandler}></Cockpit>
          {persons}
          {users}
          {/* <UserInput name={this.state.username[0].name} changed={this.switchUserNameHandler} />
          <UserOutput name={this.state.username[0].name} like={this.state.username[0].like} />
          <UserOutput name={this.state.username[1].name} like={this.state.username[1].like} /> */}
          
        </div>
    );
  }
}

export default App;

