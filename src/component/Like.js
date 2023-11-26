
import React, { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import './Like.css';

const Like = ({ likedItems, handleRemoveFromLike }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="like-container">
      <h2>Your Liked Products</h2>
      <ul className="like-items">
        {likedItems.map((item) => (
          <li key={item.id}>
            <div className="liked-product">
              <img src={item.img} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>Price: {item.newPrice}</p>
                <button
                  onClick={() => handleRemoveFromLike(item)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{
                    backgroundColor: hoveredItem === item.id ? '#cc0000' : '#ff4d4d',
                    color: '#fff',
                    border: 'none',
                    padding: '5px 10px',
                    cursor: 'pointer',
                  }}
                >
                  Remove
                  {hoveredItem === item.id && <FiHeart style={{ marginLeft: '5px' }} />}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Like;
