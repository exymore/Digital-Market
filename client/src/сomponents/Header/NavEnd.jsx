import React from 'react';
import Cart from './Cart';
import User from './User';
import Logout from './Logout';
import ButtonDefault from '../Buttons/ButtonDefault';
import ModalLogin from '../Auth/ModalLogin';
import ModalRegister from '../Auth/ModalRegister';
import { AuthContext } from '../../сontexts/auth-context';

class NavEnd extends React.Component {
  state = {
    isLoggedIn: false,
    isLoginModalShowed: false,
    isRegisterModalShowed: false,
  };

  loginModalToggle = () => {
    this.setState(prevState => ({
      isLoginModalShowed: !prevState.isLoginModalShowed,
    }));
  };

  registerModalToggle = () => {
    this.setState(prevState => ({
      isRegisterModalShowed: !prevState.isRegisterModalShowed,
    }));
  };

  componentWillMount() {
    this.setState({
      isLoggedIn: this.context.isVerified,
    });
  }

  render() {
    return (
      <div className="navbar-end">
        <Cart classes={this.state.isLoggedIn ? '' : 'hidden'} />
        <User
          login={this.context.login}
          classes={this.state.isLoggedIn ? '' : 'hidden'}
        />
        <Logout classes={this.state.isLoggedIn ? '' : 'hidden'} />
        <div className={this.state.isLoggedIn ? 'hidden' : 'navbar-item'}>
          <div className="buttons is-medium">
            <ButtonDefault
              label="Log In"
              classes="navbar-item is-light"
              onClick={this.loginModalToggle}
            />
            <ModalLogin
              modalClose={this.loginModalToggle}
              classes={
                this.state.isLoginModalShowed
                  ? 'modal is-active fadeIn'
                  : 'modal'
              }
            />
            <ButtonDefault
              label="Register"
              classes="navbar-item is-warning"
              onClick={this.registerModalToggle}
            />
            <ModalRegister
              modalClose={this.registerModalToggle}
              classes={
                this.state.isRegisterModalShowed
                  ? 'modal is-active fadeIn'
                  : 'modal'
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

NavEnd.contextType = AuthContext;
export default NavEnd;
