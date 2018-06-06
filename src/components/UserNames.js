import React, { Component } from 'react';
import { setUser } from '../actions';
import { connect } from 'react-redux';

class UserNames extends Component {

  render() {
    return (
      <div>
        {this.props.users.map(user => {
          return (
            <div key={user.id}>
              <button style={{display:'inline-block'}} onClick={() => this.props.setUser(user)}>{user.first} {user.last}</button>
            </div>
          )}
        )}
      </div>
  )}
}

export default connect(null, {setUser})(UserNames);
