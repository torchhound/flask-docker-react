import React, { Component } from 'react';

class Auth extends Component {
  render() {
    return (
      <div className="Auth uk-container uk-vertical-align uk-text-center uk-height-1-1 uk-width-1-2">
        <h1 className="uk-heading-line uk-text-center uk-light"><span>Login or Register</span></h1>
        <div className="uk-vertical-align-middle">
          <form className="uk-panel uk-panel-box uk-form">
            <div className="uk-margin">
              <div className="uk-inline">
                <span className="uk-form-icon" uk-icon="icon: user"></span>
                <input className="uk-width-1-1 uk-form-large" type="text"/>
              </div>
            </div>
            <div className="uk-margin">
              <div className="uk-inline">
                <span className="uk-form-icon" uk-icon="icon: lock"></span>
                <input className="uk-width-1-1 uk-form-large" type="text"/>
              </div>
            </div>
            <div className="uk-margin">
              <div className="uk-inline">
                <a className="uk-width-1-1 uk-button uk-button-primary uk-button-large">Login</a>
              </div>
            </div>
          </form>
          <hr className="uk-divider-icon"/>
          <form className="uk-panel uk-panel-box uk-form">
            <div className="uk-margin">
              <div className="uk-inline">
                <span className="uk-form-icon" uk-icon="icon: user"></span>
                <input className="uk-width-1-1 uk-form-large" type="text"/>
              </div>
            </div>
            <div className="uk-margin">
              <div className="uk-inline">
                <span className="uk-form-icon" uk-icon="icon: lock"></span>
                <input className="uk-width-1-1 uk-form-large" type="text"/>
              </div>
            </div>
            <div className="uk-margin">
              <div className="uk-inline">
                <span className="uk-form-icon" uk-icon="icon: check"></span>
                <input className="uk-width-1-1 uk-form-large" type="text"/>
              </div>
            </div>
            <div className="uk-margin">
              <div className="uk-inline">
                <a className="uk-width-1-1 uk-button uk-button-primary uk-button-large">Register</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;
