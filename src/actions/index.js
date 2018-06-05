const LOAD_USERS = 'LOAD_USERS';
const SET_USER = 'SET_USER';

function loadUsers(users) {
  return {
    type: LOAD_USERS,
    users
  };
};

const setUser = (user) => {
  return {
    type: SET_USER,
    user
  };
}

export { loadUsers, LOAD_USERS, setUser, SET_USER };
