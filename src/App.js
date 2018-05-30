import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import Display from './Display';
var json = require('./json.js').json;

class App extends Component {
  constructor() {
    super();
    this.state = {
      json: json,
      user: null,
    }

    this.getUserInfo = this.getUserInfo.bind(this)
    this.handleClick = this.handleClick.bind(this)
  };

  getUserInfo() {

    this.setState({
      json: json,
    })

  }

  returnUserInfo(id) {

    let { user } = this.state;

    for (let i = 0; i < json.length; i++) {
      if (parseInt(json[i].id) === parseInt(this.id)) {
        user = json[i];
      }
    }

    console.log("user", user);
    this.setState({user: user})
  }

  componentWillMount() {
    this.getUserInfo();

  }

  handleClick(e) {
    console.log("handleClick function running")
    console.log("targeting:", e.target.id);
    this.returnUserInfo(e.target.id);
  }

  render() {

    return this.state.json.map((user, index) =>

      <div key={user.index}>
        <Button className="user" id={user.id} onClick={this.handleClick}>{user.first} {user.last}</Button>
      </div>
    );
  }
}

export default App;
