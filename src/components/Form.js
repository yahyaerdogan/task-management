import React, { Component } from 'react';


export default class Form extends Component {

  state={
    name:"yahya(name)"
  }
  myChangeHandler= (event)=>{
    this.setState({name: event.target.value})
  }

  render() {
    return (
      <form>{this.props.asdasd}
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Title</label>
        <input type="text" className="form-control" id="title"  placeholder="Enter job title" onChange={this.myChangeHandler} />
        <small id="sub-description" className="form-text text-muted">{this.state.name}</small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">The Details</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    )
  }
}
