import React, { Component } from 'react';
// import Radium, { StyleRoot } from "radium";
// import Styled from "styled-components";
import Person from "./Person/Person"
import UserInput from "./User/UseInput"
import UserOutput from "./User/UserOutput"
// import logo from './logo.svg';
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

  // switchNameHandler = (addNewName) => {
  //   // console.log("name changed");
  //   // Don't do this: this.state.persons[0].name = "Shiba Tatsuya";
  //   this.setState({
  //     persons: [
  //       { name:addNewName, age:18 },
  //       { name:"Miyuki", age:17 },
  //       { name:"Lina", age:17 },
  //       { name:"X", age:undefined }
  //     ]
  //   })
  // }

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
    // if we are using ids
    // const personIndex = this.state.persons.findIndex(x => {
    //   return x.id === id;  
    // })
    // this.setState({
    //   persons: [
    //     { name:"Tatsuya", age:18 },
    //     { name:event.target.value, age:17 },
    //     { name:"Lina", age:17 },
    //     { name:"X", age:undefined }
    //   ]
    // })
  }

  switchUserNameHandler = (event) => {
    this.setState({
      username:[
        {name:event.target.value, like:"One Piece"},
        {name:"B", like:"Naruto"},
      ]
    })
  }

  togglePesonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
    // if(this.state.showPersons===false){
    //   this.setState({
    //     showPersons: true
    //   })
    // } else {
    //   this.setState({
    //     showPersons: false
    //   })
    // }
  }

  render() {

      const buttonStyle = {
        backgroundColor:"green",
        color:"white",
        font:"inherit",
        border:"1px solid blue",
        padding:"8px",
        cusor:"pointer",
        ":hover":{
          backgroundColor:"lightgreen",
          color:"black"
        }
        // color:'blue'
      };

      let btnClass = [appClasses.button]

      // const StyledButton = Styled.button`
      //   background-color: ${props => props.alt ? 'red' : 'green'};
      //   color: white;
      //   font: inherit;
      //   border: 1px solid blue;
      //   padding: 8px;
      //   cursor: pointer;
      //   &:hover {
      //     background-color: ${props => props.alt ? 'lightcoral' : 'lightgreen'};
      //     color: black;
      //   }
      // `;

    let persons = null;

    if(this.state.showPersons){
      // buttonStyle.backgroundColor = "red";
      // buttonStyle[":hover"] = {
      //   backgroundColor:"lightcoral",
      //   color:"black"
      // }
      btnClass.push(appClasses.Red);
      persons = (
        <div>
          {this.state.persons.map((person, index) =>{
            return <Person name={person.name} 
                           age={person.age} 
                           click={() => this.deletePersonHandler(index)} 
                           change={(event) => this.changeNameHandler(event, index)}
                           key={index} ></Person>
            // return <Person name={person.name} age={person.age} click={this.deletePersonHandler.bind(this, index)} key={index} ></Person>
          })}
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            click={this.switchNameHandler.bind(this, "Mahesvara")}
            change={this.changeNameHandler}
          >I love Shiba Tatuya</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} >I'm Half American Half Japanese</Person>
          <Person name={this.state.persons[3].name} age={this.state.persons[3].age} /> */}
        </div> 
      );
    } 
    // else {
    //   buttonStyle.backgroundColor = "green";
    //   buttonStyle[":hover"] = {
    //     backgroundColor:"lightgreen",
    //     color:"black"
    //   }
    // }

     const classes = [];

     if(this.state.persons.length <= 2){
      classes.push(appClasses.red);      // classes = ["red"]
     }
     if(this.state.persons.length <= 1){
       classes.push(appClasses.bold);    // classes = ["red", "bold"]
     }

    return (
      // <StyleRoot>
        <div className={appClasses.App}>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
          <p>I'm React App</p>
          <p className={classes.join(" ")} >I'm learning React</p>
          {/* <button style={{color:'blue'}} onClick={this.switchNameHandler.bind(this, "Shiba Tatsuya")}>Switch Name</button> */}
          {/* <button style={buttonStyle} onClick={() =>this.switchNameHandler("Shiba Tatsuya")}>Switch Name</button> */}
          {/* <StyledButton alt={this.state.showPersons} onClick={this.togglePesonsHandler}> */}
            {/* <button style={buttonStyle} onClick={this.togglePesonsHandler}> */}
            <button className={btnClass.join(" ")} onClick={this.togglePesonsHandler}>
              Toggle Persons
            </button>
          {/* </StyledButton> */}
          {persons}
          {/* { this.state.showPersons === true ? */}
              {/* : null
          } */}
          <UserInput name={this.state.username[0].name} changed={this.switchUserNameHandler} />
          <UserOutput name={this.state.username[0].name} like={this.state.username[0].like} />
          {/* <UserInput name={this.state.username[0].name} changed={this.switchUserNameHandler} /> */}
          {/* if we use multiple the data will be changed in all places */}
          <UserOutput name={this.state.username[1].name} like={this.state.username[1].like} />
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
      // </StyleRoot>
    );
    // return React.createElement('div', {className:"App"}, React.createElement('h1',null,  'I\'m React App'));
  }
}

// export default Radium(App);
export default App;

