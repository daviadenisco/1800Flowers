import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../index.css';
import Display from './Display';
import UserNames from './UserNames';

class GetData extends Component {

  render() {
    return (
      <div>
        <UserNames users={this.props.users}/>
        <Display />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToProps)(GetData);
