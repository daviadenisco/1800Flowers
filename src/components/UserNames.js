import React, { Component } from 'react';
import { setUser } from '../actions';
import { connect } from 'react-redux';

class UserNames extends Component {

  render() {
    return (
      <div>
        {this.props.users.map(user => {
          return (
            <div>
              <div style={{display:'inline-block'}}>{user.first} {user.last}</div>
              <button style={{display:'inline-block'}} onClick={() => this.props.setUser(user)}>Show Info</button>
            </div>
          )}
        )}
      </div>
  )}
}

export default connect(null, {setUser})(UserNames);
