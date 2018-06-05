import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../App/App.css';
import Display from './Display';

var json = require('../data/json.js').json;

class GetData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: json,
      user: false
    }
    this.handleClick = this.handleClick.bind(this)
  };

  retreiveUserInfo(id) {
    for (let i = 0; i < json.length; i++) {
      if (json[i].id === parseInt(id, 10)) {
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
    return this.state.user && this.state.user.id === parseInt(user.id, 10);
  }

  render() {
    return this.state.json.map((user, index) =>
      <div>
        <div key={user.index}>
          <Button className="user" id={user.id} onClick={this.handleClick}>{user.first} {user.last}</Button>
        </div>
        <div className={"display " + (this.showInfo(user) ? "" : "hidden")}>
          <Display user={this.state.user} />
        </div>
      </div>
    );
  }
}

export default GetData;
