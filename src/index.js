import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './index.css';
import Heading from './components/Heading';
import GetData from './components/GetData.js';
import Footer from './components/Footer';
import { loadUsers } from './actions';
import registerServiceWorker from './registerServiceWorker';
var userData = require('./data/json.js').json;

const store = createStore(rootReducer);
store.dispatch(loadUsers(userData));

ReactDOM.render(
  <Provider store={store} >
    <div>
      <Heading />
      <GetData />
      <Footer />
    </div>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
