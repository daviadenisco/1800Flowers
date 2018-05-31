import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import Display from './Display';
var json = require('./json.js').json;
var element = null;

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
    const userSelected = id;
    const { user } = this.state.json;

    // iterate across json
    for (let i = 0; i < json.length; i++) {
      // if the id matches the id
      if (json[i].id === parseInt(id)) {
        // set id to that number
        this.state.id = json[i];
        // set user to that user's info
        this.state.user = {
          first: json[i].first,
          last: json[i].last,
          age: json[i].age,
          location: json[i].location,
          description: json[i].description
        }
        console.log("json: ", json);
        console.log("this.state.user: ", this.state.user)
        console.log("this.state.user.first: ", this.state.user.first)

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
    console.log("userSelected", this.userSelected);
    this.id = e.target.id;
    this.userSelected = this.id;

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
      {this.state.userSelected === this.state.id ? (
        <div>
          <p>{user.first} {user.last}</p>
          <p>{user.age}</p>
          <p>{user.location}</p>
          <p>{user.description}</p>
        </div>
      ) : null}
      </div>
    );
  }
}

export default App;
