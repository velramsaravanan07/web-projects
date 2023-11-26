// Cart.js
import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, handleRemoveFromCart }) => {
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul className="cart-items">
        {cartItems && cartItems.map((item) => (
          <li key={item.id}>
            <img src={item.img} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>Price: {item.newPrice}</p>
              <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
