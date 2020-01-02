import React from 'react';
import iPhone from './iPhone.png';
import PriceHolder from '../PriceHolder/PriceHolder';

const BestOffer = () => (
  <section className="hero section is-platform">
    <div className="container">
      <div className="columns is-vcentered">
        <div className="column is-12">
          <div className="columns is-centered">
            <div className="column is-6">
              <div className="section-header">
                <h1 className="title is-spaced animated-scale-up-center">
                  iPhone XS
                </h1>
                <p className="subtitle animated-scale-up-center">
                  Super Retina in two sizes — including the largest display ever
                  on an iPhone. Even faster Face ID. The smartest, most powerful
                  chip in a smartphone. And a breakthrough dual-camera system
                  with Depth Control. iPhone XS is everything you love about
                  iPhone. Taken to the extreme.
                </p>
                <PriceHolder />
              </div>
            </div>
            <div className="column is-3 has-text-centered">
              <div className="section-media animated-scale-up-center">
                <img src={iPhone} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BestOffer;
