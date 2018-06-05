import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import rootReducer from './reducers';
import './index.css';
import Heading from './components/Heading';
import App from './App/App.js';
import Footer from './components/Footer';
import Stack from './App/Stack.js';
import { loadUsers } from './actions';
import registerServiceWorker from './registerServiceWorker';
var userData = require('./data/json.js').json;

const store = createStore(rootReducer);
store.dispatch(loadUsers(userData));

ReactDOM.render(
  <Provider store={store} >
    <div>
      <Heading />
      <App />
      <Footer />
    </div>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
