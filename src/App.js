
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
      user: false
    }
    this.handleClick = this.handleClick.bind(this)
  };

  retreiveUserInfo(id) {
    for (let i = 0; i < json.length; i++) {
      if (json[i].id === parseInt(id)) {
        this.setState({
          user: json[i]
        })
      }
    }
  }

  handleClick(e) {
    this.retreiveUserInfo(e.target.id);
  }

  showInfo(user) {
    return this.state.user && this.state.user.id == user.id
  }

  render() {
    return this.state.json.map((user, index) =>
      <div>
        <div key={user.index}>
          <Button className="user" id={user.id} onClick={this.handleClick}>{user.first} {user.last}</Button>
        </div>
        { this.showInfo(user) ? (
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
