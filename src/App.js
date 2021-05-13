import React, { Component } from 'react'
import Listing from './components/Listing';
import Form from './components/Form';
import ToDoList from './components/ToDoList'
export default class App extends Component {

  state= {ToDoList};
  
  render() {

    console.log(this.state.ToDoList);
    console.log(ToDoList);

    return (

      <div className="container">
        <Form />
        <br />
        <Listing name="yahay"/>
      </div>

    )
  }
}
