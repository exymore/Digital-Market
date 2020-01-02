import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { AuthContext } from '../../сontexts/auth-context';
import boxPNG from './boxPNG.png';

const Cart = () => {
  document.title = 'Cart';

  const [products, setProducts] = useState([]);
  const [isFetched, setFetched] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const isVerified = useContext(AuthContext).isVerified;

  const fetchProducts = async () => {
    const res = await fetch('/cart');
    const json = await res.json();
    await setProducts(json);
    setFetched(true);
  };

  useEffect(
    () => {
      fetchProducts();
    },
    [isFetched, isLoaded]
  );

  const EmptyCart = () => (
    <div className="app-container hero">
      <Header />
      <section className="section is-hero">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-narrow">
              <img src={boxPNG} alt="" />
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-narrow">
              <h1 className="title">Your Cart Is Empty!</h1>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );

  const FilledCart = () => {
    return (
      <div className="app-container hero">
        <Header />
        <section className="section is-hero">
          {products.map(product => (
            <div
              key={product.productID}
              className={
                'gap animated-scale-up-center container' +
                `${isLoaded ? '' : ' hidden'}`
              }
            >
              <div className="holder columns is-centered is-vcentered">
                <div className="column is-offset-1 is-2">
                  <img
                    onLoad={() => setLoaded(true)}
                    alt={product.productName}
                    src={
                      'images/' +
                      product.category.toLowerCase() +
                      's/' +
                      product.image +
                      '.png'
                    }
                  />
                </div>
                <div className="column is-6">
                  <p className="subtitle">{product.productName}</p>
                  <p>{product.description}</p>
                </div>
                <div className="column is-3 is-offset-1">
                  <h2 className="price title">${product.price}</h2>
                </div>
              </div>
            </div>
          ))}
        </section>
        <Footer />
      </div>
    );
  };

  if (isVerified) {
    if (isFetched) {
      if (products.length !== 0) {
        return FilledCart();
      } else {
        return EmptyCart();
      }
    } else {
      return null;
    }
  } else {
    return <Redirect to="/" />;
  }
};

export default Cart;
