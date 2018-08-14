export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const loginSuccess = (status, token, username) => ({
  type: LOGIN_SUCCESS,
  status,
  token,
  username
});

export const loginFailure = status => ({
  type: LOGIN_FAILURE,
  status
});

export const registerSuccess = (status, token, username) => ({
  type: REGISTER_SUCCESS,
  status,
  token,
  username
});

export const registerFailure = status => ({
  type: REGISTER_FAILURE,
  status
});

export const logoutSuccess = status => ({
  type: LOGIN_SUCCESS,
  status
});

export const logoutFailure = status => ({
  type: LOGIN_FAILURE,
  status
});

export function postLogin(username, password) {
  return dispatch => {
    fetch('/auth/login', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: username, password: password})
    }).then(res => {
        let data = res.json();
        dispatch(loginSuccess(data.status, data.token, username));
      })
      .catch(err => {
        dispatch(loginFailure(err.json().status));
      });
  }
}

export function postRegister(username, password) {
  return dispatch => {
    fetch('/auth/register', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: username, password: password})
    }).then(res => {
        let data = res.json();
        dispatch(registerSuccess(data.status, data.token, username));
      })
      .catch(err => {
        dispatch(registerFailure(err.json().status));
      });
  }
}

export function postLogout(username) {
  return dispatch => {
    fetch('/auth/logout', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: username})
    }).then(res => {
        dispatch(logoutSuccess(res.json().status));
      })
      .catch(err => {
        dispatch(logoutFailure(err.json().status));
      });
  }
}