import { combineReducers } from 'redux';
import { LOGIN_SUCCESS, LOGIN_FAILURE,
  REGISTER_SUCCESS, REGISTER_FAILURE,
  LOGOUT_SUCCESS, LOGOUT_FAILURE } from './authActions';

const initialState = {
  auth: {
    loggedIn: false,
    token: '',
    loginStatus: '',
    registerStatus: '',
    logoutStatus: '',
    username: ''
  }
}

function auth(state = initialState.auth, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        token: action.token,
        loginStatus: action.status,
        username: action.username
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
        loginStatus: action.status,
        username: ''
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        token: action.token,
        registerStatus: action.status,
        username: action.username
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        loggedIn: false,
        registerStatus: action.status,
        username: ''
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggedIn: false,
        logoutStatus: action.status,
        username: ''
      }
    case LOGOUT_FAILURE:
      return {
        ...state,
        loggedIn: false,
        logoutStatus: action.status,
        username: ''
      }
    default:
      return state;
  }
}

const reducers = combineReducers({
  auth
});

export default reducers;