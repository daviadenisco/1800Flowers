
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Display from './Display';
import './App.css';
var json = require('./json.js').json;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: json,
      userSelected: false,
      user: ""
    }
    this.handleClick = this.handleClick.bind(this)
  };

  returnUserInfo(id) {
    const userSelected = this.state.userSelected;
    console.log("1. userSelected", userSelected);

    for (let i = 0; i < json.length; i++) {
      if (json[i].id === parseInt(id)) {
        this.state.user = json[i];
        const currentUser = this.state.user;
        console.log("5. id", id);
        this.setState({
          userSelected: userSelected
        })
        console.log("2. json obj: ", this.state.user);
        console.log("3. userSelected: ", this.state.userSelected)

        console.log("4. first name: ", this.state.user.first)

      }

    }
  }

  handleClick(e) {
    this.id = e.target.id;

    this.returnUserInfo(e.target.id);

    this.setState({
       userSelected: true
    })
  }

  render() {

    return this.state.json.map((user, index) =>
    <div>
      <div key={user.index}>
        <Button className="user" id={user.id} onClick={this.handleClick}>{user.first} {user.last}</Button>
      </div>
      {this.state.userSelected ? (
        <div className="display">
          <p>{this.state.user.first} {this.state.user.last}</p>
          <p>{this.state.user.age}</p>
          <p>{this.state.user.location}</p>
          <p>{this.state.user.description}</p>
        </div>
      ) : null}
      </div>
    );
  }
}

export default App;
