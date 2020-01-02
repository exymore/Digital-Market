import React, { useState } from 'react';
import NavEnd from './NavEnd';

const Header = () => {
  const [isHam, setHam] = useState(false);

  return (
    <header className="app-header">
      <nav className="navbar" role="navigation">
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item">
              <a href="/">
                <h1 className="title">Digital Market</h1>
              </a>
            </div>
            <a
              role="button"
              className={isHam ? 'navbar-burger is-active' : 'navbar-burger'}
              data-target="navMenu"
              aria-label="menu"
              aria-expanded="false"
              onClick={() => setHam(!isHam)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div
            className={isHam ? 'navbar-menu is-active' : 'navbar-menu'}
            id="target"
          >
            <NavEnd />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
