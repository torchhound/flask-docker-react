import React, { Component } from 'react';
import { connect } from "react-redux";
import { postLogin, postRegister } from '../actions/authActions';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
    this.onRegisterSubmit = this.onRegisterSubmit.bind(this);
  }

  onLoginSubmit() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    this.props.dispatchLogin(username, password);
  }

  onRegisterSubmit() {
    let confirmElement = document.getElementById('registerConfirm');
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const confirm = confirmElement.value;

    if (confirm !== password) {
      confirmElement += ' uk-form-danger uk-animation-shake';
    } else {
      confirmElement.classList.remove('uk-form-danger');
      confirmElement.classList.remove('uk-animation-shake');

      this.props.dispatchRegister(username, password);
    }
  }

  render() {
    const { registerStatus, loginStatus } = this.props;

    let alertDiv = '';

    if (registerStatus) {
      alertDiv = <div className="uk-alert"><a className="uk-alert-close" uk-close></a><p>{registerStatus}</p></div>
    } else if (loginStatus) {
      alertDiv = <div className="uk-alert"><a className="uk-alert-close" uk-close></a><p>{loginStatus}</p></div>
    } 

    return (
      <div className="Auth uk-container uk-vertical-align uk-text-center uk-height-1-1 uk-width-1-2">
        <h1 className="uk-heading-line uk-text-center uk-light"><span>Login or Register</span></h1>
        <div className="uk-vertical-align-middle">
          <form className="uk-panel uk-panel-box uk-form">
            <div className="uk-margin">
              <div className="uk-inline">
                <span className="uk-form-icon" uk-icon="icon: user"></span>
                <input className="uk-width-1-1 uk-form-large" type="text" id="loginUsername"/>
              </div>
            </div>
            <div className="uk-margin">
              <div className="uk-inline">
                <span className="uk-form-icon" uk-icon="icon: lock"></span>
                <input className="uk-width-1-1 uk-form-large" type="password" id="loginPassword"/>
              </div>
            </div>
            <div className="uk-margin">
              <div className="uk-inline">
                <a className="uk-width-1-1 uk-button uk-button-primary uk-button-large" onClick={this.onLoginSubmit}>Login</a>
              </div>
            </div>
            {alertDiv}
          </form>
          <hr className="uk-divider-icon"/>
          <form className="uk-panel uk-panel-box uk-form">
            <div className="uk-margin">
              <div className="uk-inline">
                <span className="uk-form-icon" uk-icon="icon: user"></span>
                <input className="uk-width-1-1 uk-form-large" type="text" id="registerUsername"/>
              </div>
            </div>
            <div className="uk-margin">
              <div className="uk-inline">
                <span className="uk-form-icon" uk-icon="icon: lock"></span>
                <input className="uk-width-1-1 uk-form-large" type="password" id="registerPassword"/>
              </div>
            </div>
            <div className="uk-margin">
              <div className="uk-inline">
                <span className="uk-form-icon" uk-icon="icon: check"></span>
                <input className="uk-width-1-1 uk-form-large" type="password" id="registerConfirm"/>
              </div>
            </div>
            <div className="uk-margin">
              <div className="uk-inline">
                <a className="uk-width-1-1 uk-button uk-button-primary uk-button-large" onClick={this.onRegisterSubmit}>Register</a>
              </div>
            </div>
            {alertDiv}
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchLogin: (username, password) => {
      dispatch(postLogin(username, password));
    },
    dispatchRegister: (username, password) => {
      dispatch(postRegister(username, password));
    }
  }
}

const mapStateToProps = state => {
  return { loginStatus: state.auth.loginStatus,
    registerStatus: state.auth.registerStatus
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
