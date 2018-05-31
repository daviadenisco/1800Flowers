import React, { Component } from 'react';
import './App.css';
var json = require('./json.js').json;

class Display extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return "display component"
  }
}

export default Display;
