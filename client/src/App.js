import MainPage from './сomponents/Main/MainPage';
import ProductPage from './сomponents/products/ProductPage';
import { AuthContext } from './сontexts/auth-context';
import Cart from './сomponents/Cart/Cart';
import NotFound from './сomponents/404/NotFound';
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    login: '',
    password: '',
    isVerified: false,
    isFetched: false,
  };

  componentWillMount = async () => {
    document.title = 'Digital Market';
    await fetch('/auth', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(async data => {
        await this.setState({ login: data.login, password: data.password });
      });
    await fetch('/auth/is', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(async isVerified => {
        await this.setState({ isVerified });
      });
    await this.setState({ isFetched: true });
  };

  render() {
    if (this.state.isFetched) {
      return (
        <AuthContext.Provider
          value={{
            login: this.state.login,
            password: this.state.password,
            isVerified: this.state.isVerified,
          }}
        >
          <HashRouter>
            <Switch>
              <Route path="/" component={MainPage} exact />
              <Route path="/cart" component={Cart} exact />
              <Route
                path="/products/phones"
                component={() => <ProductPage category="phones" />}
              />
              <Route
                path="/products/notebooks"
                component={() => <ProductPage category="notebooks" />}
              />
              <Route
                path="/products/watches"
                component={() => <ProductPage category="watches" />}
              />
              <Route
                path="/products/videocards"
                component={() => <ProductPage category="videocards" />}
              />
              <Route
                path="/products/processors"
                component={() => <ProductPage category="processors" />}
              />
              <Route
                path="/products/ssd"
                component={() => <ProductPage category="ssd" />}
              />
              <Route component={NotFound} />
            </Switch>
          </HashRouter>
        </AuthContext.Provider>
      );
    } else {
      return null;
    }
  }
}

export default App;
