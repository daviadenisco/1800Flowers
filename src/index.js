import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import rootReducer from './reducers';
import './index.css';
import Heading from './components/Heading';
import App from './App/App.js';
import Footer from './components/Footer';
import Stack from './App/Stack.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <Heading />
    <App />
    <Footer />
  </div>
  , document.getElementById('root'));

registerServiceWorker();
