import React from 'react';
import { AuthContext } from '../../сontexts/auth-context';

class Login extends React.PureComponent {
  state = {
    login: '',
    password: '',
  };

  loginChange = e => {
    this.setState({ login: e.target.value.toString() });
  };

  passwordChange = e => {
    this.setState({ password: e.target.value.toString() });
  };

  componentWillMount = () => {
    fetch('/auth', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ login: data.login, password: data.password });
      });
  };

  render() {
    this.setContext();
    return (
      <div>
        <div className="field">
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              name="login"
              placeholder="Login"
              onChange={this.loginChange}
            />
            <span className="icon is-left">
              <i className="fas fa-user-circle" />
            </span>
          </div>
        </div>

        <div className="field">
          <div className="control has-icons-left">
            <input
              className="input"
              type="password"
              name="password"
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

  setContext() {
    this.context.login = this.state.login;
    this.context.password = this.state.password;
  }
}

Login.contextType = AuthContext;

export default Login;
