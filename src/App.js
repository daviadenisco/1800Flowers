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
      userSelected: false,
      user: null
    }

    // this.getUserInfo = this.getUserInfo.bind(this)
    this.handleClick = this.handleClick.bind(this)
  };

  // getUserInfo() {
  //
  //   this.setState({
  //     json: json,
  //   })
  // }

  returnUserInfo(id) {
    const userSelected = this.state.userSelected;
    console.log("1. userSelected", userSelected);
    const id2 = 5;

    // iterate across json
    for (let i = 0; i < json.length; i++) {
      // if the id matches the id
      if (json[i].id === parseInt(id)) {
        this.state.user = json[i];
        // const currentUser = this.state.user;
        console.log("5. id", id);
        this.setState({
          id: id2,
          // user: user,
          userSelected: userSelected
        })
        console.log("TRY id2", this.state.id)
        console.log("2. json obj: ", this.state.user);
        console.log("3. userSelected: ", this.state.userSelected)

        console.log("4. first name: ", this.state.user.first)

      }

    }



    }
  //
  // componentWillMount() {
  //
  //   this.getUserInfo();
  // }

  handleClick(e) {
    e.preventDefault();
    this.id = e.target.id;

    console.log("6. this.id: ", this.id)
    this.returnUserInfo(e.target.id);

    this.setState({
       userSelected: e.target.id})
       console.log("7. userSelected", this.userSelected);
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
        <div className="display">
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
