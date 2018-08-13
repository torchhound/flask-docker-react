import { combineReducers } from 'redux';
import { LOGIN_SUCCESS, LOGIN_FAILURE,
  REGISTER_SUCCESS, REGISTER_FAILURE } from './authActions';

const initialState = {
  auth: {
    loggedIn: false,
    token: '',
    loginStatus: '',
    registerStatus: ''
  }
}

function auth(state = initialState.auth, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        token: action.token,
        loginStatus: action.status
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
        loginStatus: action.status
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        token: action.token,
        registerStatus: action.status
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        loggedIn: false,
        registerStatus: action.status
      }
    default:
      return state;
  }
}

const reducers = combineReducers({
  auth
});

export default reducers;