import React from 'react';

const Footer = () => (
  <footer className="app-footer is-small">
    <nav className="navbar" role="navigation">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <p className="footerSubtitle">© 2019 exymore</p>
          </div>
        </div>
        <div className="navbar-end is-multiline is-flex">
          <div className="navbar-item">
            <a
              rel="noopener noreferrer"
              href="https://instagram.com/exymore/"
              target="_blank"
            >
              <i className="fab fa-instagram fa-2x" />
            </a>
          </div>
          <div className="navbar-item">
            <a
              rel="noopener noreferrer"
              href="https://vk.com/exymore"
              target="_blank"
            >
              <i className="fab fa-vk fa-2x" />
            </a>
          </div>
          <div className="navbar-item">
            <a
              rel="noopener noreferrer"
              href="https://bitbucket.com/exymore/"
              target="_blank"
            >
              <i className="fab fa-bitbucket fa-2x" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  </footer>
);

export default Footer;
