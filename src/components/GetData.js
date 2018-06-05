import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../App/App.css';
import Display from './Display';
import UserNames from './UserNames';

var json = require('../data/json.js').json;

class GetData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: json,
      user: false
    }
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

  handleClick = (e) => {
    this.retreiveUserInfo(e.target.id);
  }

  showInfo(user) {
    return this.state.user && this.state.user.id === parseInt(user.id, 10);
  }

  render() {
    return (
      <div>
        <UserNames users={this.state.json} />
        <Display user={this.state.user} />
      </div>
    );
  }
}

export default GetData;
