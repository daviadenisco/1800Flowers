import React, { Component } from 'react';
import '../App/App.css';

class Display extends Component {

  render(props) {

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
export default Display;
