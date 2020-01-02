import React from 'react';
import Header from '../Header/Header';
import BestOffer from './BestOffer/BestOffer';
import Categories from './Categories/Categories';
import Footer from '../Footer/Footer';

const MainPage = () => (
  <div className="app-container hero">
    <Header />
    <BestOffer />
    <Categories />
    <Footer />
  </div>
);

export default MainPage;
