export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const loginSuccess = (status, token) => ({
  type: LOGIN_SUCCESS,
  status
});

export const loginFailure = status => ({
  type: LOGIN_FAILURE,
  status
});

export const registerSuccess = (status, token) => ({
  type: REGISTER_SUCCESS,
  status
});

export const registerFailure = status => ({
  type: REGISTER_FAILURE,
  status
});

export function postLogin(username, password) {
  return dispatch => {
    fetch('/auth/login:4040', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: username, password: password})
    }).then(res => {
        dispatch(loginSuccess(res.json().status, res.json().token));
      })
      .catch(err => {
        dispatch(loginFailure(err.json().status));
      });
  }
}

export function postRegister(username, password) {
  return dispatch => {
    fetch('/auth/register:4040', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: username, password: password})
    }).then(res => {
        dispatch(registerSuccess(res.json().status, res.json().token));
      })
      .catch(err => {
        dispatch(registerFailure(err.json().status));
      });
  }
}