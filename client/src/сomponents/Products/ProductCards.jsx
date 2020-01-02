import React, { useEffect } from 'react';
import AddToCartButton from '../Buttons/AddToCartButton';

const ProductCards = props => {
  const buttonStyle = {
    marginTop: 0,
    marginBottom: 0,
    border: 0,
  };

  const products = props.products;
  const { filterBy, showOnly } = props;

  useEffect(() => {}, [filterBy, showOnly, products]);

  //Чем позже добавлен объект - тем больше его айдишник
  let sortByDate = () => {
    products.sort(function(a, b) {
      if (a.productID > b.productID) return 1;
      if (a.productID < b.productID) return -1;
      return 0;
    });
  };

  let sortByPriceLowToHigh = () => {
    products.sort(function(a, b) {
      if (a.price > b.price) return 1;
      if (a.price < b.price) return -1;
      return 0;
    });
  };

  let sortByPriceHighToLow = () => {
    products.sort(function(a, b) {
      if (a.price > b.price) return -1;
      if (a.price < b.price) return 1;
      return 0;
    });
  };

  let sortByAlphabet = () => {
    products.sort(function(a, b) {
      if (a.productName > b.productName) return 1;
      if (a.productName < b.productName) return -1;
      return 0;
    });
  };

  if (filterBy === 'date') sortByDate();
  if (filterBy === 'priceLTH') sortByPriceLowToHigh();
  if (filterBy === 'priceHTL') sortByPriceHighToLow();
  if (filterBy === 'alphabet') sortByAlphabet();

  return (
    <section className="section is-hero">
      {products.map(product => (
        <div
          key={product.productID}
          className={
            'gap container' +
            `${showOnly === product.brand || showOnly === '' ? '' : ' hidden'}`
          }
        >
          <div className="animated-scale-up-center holder columns is-centered is-vcentered">
            <div className="column is-2">
              <img
                src={
                  'images/' +
                  product.category.toLowerCase() +
                  's/' +
                  product.image +
                  '.png'
                }
                alt={product.productName}
              />
            </div>
            <div className="column is-4">
              <p className="productName subtitle">{product.productName}</p>
              <p>{product.description}</p>
            </div>
            <div className="column is-2 is-offset-1">
              <h2 className="price title">${product.price}</h2>
            </div>
            <div className="column is-3">
              <AddToCartButton
                productID={product.productID}
                classes="is-medium is-link"
                label="Add To Cart"
                styles={buttonStyle}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductCards;
