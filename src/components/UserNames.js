import React from 'react';
import { setUser } from '../actions';

const UserNames = ({users}) =>
    <ul>
    {users.map((user, id) => {
      return
      <li
      key={id} onClick={this.props.setUser()}
      >
      {user.first} {user.last}
      </li>
    })
  }
</ul>


export default UserNames;
