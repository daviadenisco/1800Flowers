import React, { Component } from 'react';
import './App.css';

class Display extends Component {

  render() {

    return (
      <div>
        <h1 className='welcome'>{this.props.user}</h1>
      </div>

    );
  }
}

export default Display;
