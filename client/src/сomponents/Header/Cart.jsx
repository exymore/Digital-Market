import React from 'react';

const Cart = props => (
  <a href="/#/cart" className={'navbar-item is-vcentered ' + props.classes}>
    <svg
      className="cartLogo"
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#463853"
      strokeWidth={'2'}
      strokeLinecap={'round'}
      strokeLinejoin={'bevel'}
    >
      <circle cx="10" cy="20.5" r="1" />
      <circle cx="18" cy="20.5" r="1" />
      <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" />
    </svg>
    Cart
  </a>
);

export default Cart;
