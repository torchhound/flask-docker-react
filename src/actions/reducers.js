import { combineReducers } from 'redux';

const initialState = {
  auth: {
    loggedIn: false,
    username: ""
  }
}

function auth(state = initialState.auth, action) {
  switch(action.type) {
    default:
      return state;
  }
}

const reducers = combineReducers({
  auth
});

export default reducers;