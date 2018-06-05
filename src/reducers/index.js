import { LOAD_USERS, SET_USER } from '../actions';
import { combineReducers } from 'redux';

function users(state = [], action) {
  switch (action.type) {
    case "LOAD_USERS":
      return action.users;
      default:
        return {...state};
  }
}

const info = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.user;
      default:
        return {...state};
  }
}

export default combineReducers({users, info});
