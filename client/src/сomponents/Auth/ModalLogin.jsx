import React from 'react';
import Login from '../Forms/Login';
import { AuthContext } from '../../сontexts/auth-context';

class ModalLogin extends React.PureComponent {
  state = {
    isInvalid: false,
  };

  sendDataToServer = async () => {
    await fetch('/auth', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        login: this.context.login,
        password: this.context.password,
      }),
    }).then(res => {
      if (res.status !== 200) {
        this.setState({ isInvalid: true });
        this.context.isVerified = false;
      } else {
        this.setState({ isInvalid: false });
        this.context.isVerified = true;
        window.location.reload();
      }
    });
  };

  render() {
    return (
      <div id="modal-ter" className={this.props.classes}>
        <div className="modal-background" onClick={this.props.modalClose} />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Log In</p>
            <button
              className="delete"
              aria-label="close"
              onClick={this.props.modalClose}
            />
          </header>
          <section className="modal-card-body">
            <div className="content">
              <Login />
              <p
                className={
                  this.state.isInvalid
                    ? 'wrong has-text-danger is-size-7'
                    : 'hidden'
                }
                style={{ marginTop: '0.8rem' }}
              >
                Invalid Login/Password
              </p>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button
              className="button is-success"
              onClick={this.sendDataToServer}
            >
              Log In
            </button>
            <button className="button" onClick={this.props.modalClose}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

ModalLogin.contextType = AuthContext;

export default ModalLogin;
