import React from 'react';
import phones from './img/Phones Card.png';
import notebooks from './img/Notebooks Card.png';
import watches from './img/Watches Card.png';
import videocards from './img/Video Cards Card.png';
import processors from './img/Processors Card.png';
import ssd from './img/SSD Card.png';

const Categories = () => {
  return (
    <section className="hero-body">
      <div className="container">
        <div className="columns is-centered has-text-centered is-multiline">
          <div className="column is-4">
            <div className="card-content category">
              <a href="/#/products/phones">
                <img className="category-image" src={phones} alt="" />
              </a>
            </div>
          </div>
          <div className="column is-4">
            <div className="card-content category">
              <a href="/#/products/notebooks">
                <img className="category-image" src={notebooks} alt="" />
              </a>
            </div>
          </div>
          <div className="column is-4">
            <div className="card-content category">
              <a href="/#/products/watches">
                <img className="category-image" src={watches} alt="" />
              </a>
            </div>
          </div>
          <div className="column is-4">
            <div className="card-content category">
              <a href="/#/products/videocards">
                <img className="category-image" src={videocards} alt="" />
              </a>
            </div>
          </div>
          <div className="column is-4">
            <div className="card-content category">
              <a href="/#/products/processors">
                <img className="category-image" src={processors} alt="" />
              </a>
            </div>
          </div>
          <div className="column is-4">
            <div className="card-content category">
              <a href="/#/products/ssd">
                <img className="category-image" src={ssd} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
