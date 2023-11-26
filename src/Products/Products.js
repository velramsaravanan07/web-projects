

import React, { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import './Products.css';

function Products({ result, handleAddToCart, likedItems, handleAddToLike }) {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <section className="card-container">
      {result.map((card) => (
        <div key={card.props.product.id}>
          {card}
         
          <div className='heart'>
          <button onClick={() => handleAddToCart(card.props.product)}>
            Add to Cart
          </button>
          <span
            className={`nav-icons ${likedItems && likedItems.some(item => item.id === card.props.product.id) ? 'red-heart' : ''}`}
            onMouseEnter={() => setHoveredProduct(card.props.product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
            onClick={() => handleAddToLike(card.props.product)}
            style={{ cursor: 'pointer', color: hoveredProduct === card.props.product.id ? '#cc0000' : 'inherit' }}
          >
            <FiHeart />
          </span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Products;
