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
      id: null,
      userSelected: false
    }

    // this.getUserInfo = this.getUserInfo.bind(this)
    this.handleClick = this.handleClick.bind(this)
  };

  getUserInfo() {

    this.setState({
      json: json,
    })
  }

  returnUserInfo(id) {
    const userSelected = true;
    const { user } = this.state.json;

    for (let i = 0; i < json.length; i++) {
      if (json[i].id === parseInt(id)) {
        this.state.id = json[i];
        this.state.user = json[i].user;
        // console.log(this.state.user)
      }
    }

    console.log("id", id);
    this.setState({
      id: id,
      userSelected: userSelected,
      user: user
    })

    }

  // componentWillMount() {
  //
  //   this.getUserInfo();
  // }

  handleClick(e) {
    // console.log("handleClick function running")
    // console.log("targeting:", e.target.id);
    this.userSelected = true;
    console.log("userSelected", this.userSelected);
    this.id = e.target.id;
    console.log(this.id)
    this.returnUserInfo(e.target.id);

  }

  // handleClick() {
  //   this.setState(prevState => ({
  //     userSelected: !prevState.userSelected
  //   }));
  // }

  render() {

    return this.state.json.map((user, index) =>
    <div>
      <div key={user.index}>
        <Button className="user" id={user.id} onClick={this.handleClick}>{user.first} {user.last}</Button>
      </div>
      {this.state.userSelected ? (
        <div>
          <Display />
        </div>
      ) : null}
      </div>
    );
  }
}

export default App;
