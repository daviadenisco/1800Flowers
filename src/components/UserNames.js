import React, { Component } from 'react';
import { setUser } from '../actions';
import { connect } from 'react-redux';

class UserNames extends Component {

  // componentDidMount() {
  //   if (this.props.users.length === 0) this.props.loadUsers(users);
  // }
  render() {
    console.log(this.props.users)
    return (
    <ul>
      {this.props.users.map(user => {
        return <li onClick={this.user}>{user.first} {user.last}</li>
      })}
    </ul>
  )}
}

// this tells us what we're giving access to in the store
//add load and setUser as second parameter as an object
export default connect(null, {setUser})(UserNames);
