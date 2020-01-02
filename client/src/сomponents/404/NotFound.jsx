import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ButtonDefault from '../Buttons/ButtonDefault';

const NotFound = () => {
  document.title = 'Page not found!';
  return (
    <div className="app-container hero">
      <Header />
      <section className="section is-hero">
        <div className="container animated-scale-up-center">
          <div className="columns is-centered is-vcentered">
            <div className="column is-narrow">
              <h1 className="title">Error 404</h1>
            </div>
          </div>
          <div className="columns is-centered is-vcentered">
            <div className="column is-narrow">
              <h2 className="price">Page not found!</h2>
            </div>
          </div>
          <div className="columns is-centered is-vcentered">
            <div className="column is-3">
              <ButtonDefault
                label="Go back home"
                classes="navbar-item is-warning"
                href="/"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;
