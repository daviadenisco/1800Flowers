import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Heading from './Heading';
import App from './App';
import Display from './Display';
import Footer from './Footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
  <Heading />
  <App />
  <Display />
  <Footer />
  </div>
  , document.getElementById('root'));

registerServiceWorker();
