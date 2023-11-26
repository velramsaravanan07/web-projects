import React from 'react';
import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';
import './Nav.css';

function Nav({ handleInputChange, query, handleLikeClick }) {
  return (
    <nav>
      
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        <Link to="/like" className="nav-icons" onClick={handleLikeClick}>
          <FiHeart className="nav-icons" />
        </Link>
        <Link to="/cart" className="nav-icons">
          <AiOutlineShoppingCart className="nav-icons" />
        </Link>
        <a href="/login" target="_blank" rel="noopener noreferrer">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
      
    </nav>
  );
}

export default Nav;
