import React from 'react';
import { RegisterContext } from '../../сontexts/register-context';

class Register extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    login: '',
    password: '',
  };

  firstNameChange = e => {
    this.setState({ firstName: e.target.value.toString() });
  };

  lastNameChange = e => {
    this.setState({ lastName: e.target.value.toString() });
  };

  emailChange = e => {
    this.setState({ email: e.target.value.toString() });
  };

  loginChange = e => {
    this.setState({ login: e.target.value.toString() });
  };

  passwordChange = e => {
    this.setState({ password: e.target.value.toString() });
  };

  setContext() {
    this.context.firstName = this.state.firstName;
    this.context.lastName = this.state.lastName;
    this.context.email = this.state.email;
    this.context.login = this.state.login;
    this.context.password = this.state.password;
  }

  render() {
    this.setContext();
    return (
      <div>
        <div className="columns">
          <div className="column">
            <div className="field">
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  placeholder="First Name"
                  onChange={this.firstNameChange}
                />
                <span className="icon is-left">
                  <i className="far fa-user-circle" />
                </span>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="field">
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  placeholder="Last Name"
                  onChange={this.lastNameChange}
                />
                <span className="icon is-left">
                  <i className="far fa-user-circle" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="field">
          <div className="control has-icons-left">
            <input
              className="input"
              type="email"
              placeholder="Email"
              onChange={this.emailChange}
            />
            <span className="icon is-left">
              <i className="fas fa-envelope" />
            </span>
          </div>
        </div>

        <div className="field">
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="Login"
              onChange={this.loginChange}
            />
            <span className="icon is-left">
              <i className="fas fa-sign-in-alt" />
            </span>
          </div>
        </div>

        <div className="field">
          <div className="control has-icons-left">
            <input
              className="input"
              type="password"
              placeholder="Password"
              onChange={this.passwordChange}
            />
            <span className="icon is-left">
              <i className="fas fa-lock" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

Register.contextType = RegisterContext;
export default Register;
