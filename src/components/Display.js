import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../index.css';

class Display extends Component {

  render() {
    return (
      <div>
        <li className='firstNlast'>{this.props.user.first} {this.props.user.last}</li>
        <li className='age'>{this.props.user.age}</li>
        <li className='location'>{this.props.user.location}</li>
        <li className='description'>{this.props.user.description}</li>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {user: state.user};
}

export default connect(mapStateToProps)(Display);
