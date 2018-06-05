import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../App/App.css';
import Display from './Display';
import UserNames from './UserNames';

class GetData extends Component {


  render() {
    const display = this.props.user
      ? <Display user={this.props.user} />
      : null

    return (
      <div>
        <UserNames users={this.props.users}/>
        {display}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToProps)(GetData);
