

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Nav';
import Products from './Products/Products';
import RecommendedComponent from './Recommended/Recommended';
import Sidebar from './sidebar/Sidebar';
import Cart from './component/Cart';
import products from './db/Data';
import Card from './component/Card';
import Like from './component/Like';
import Login from './component/Login';


import './index.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [likedItems, setLikedItems] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const handleRemoveFromCart = (product) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item !== product));
  };

  const handleAddToLike = (product) => {
    setLikedItems((prevLikedItems) => [...prevLikedItems, product]);
  };

  const handleRemoveFromLike = (product) => {
    setLikedItems((prevLikedItems) => prevLikedItems.filter((item) => item !== product));
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = products.filter(
        (product) => product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(({ id, img, title, star, reviews, prevPrice, newPrice }) => (
      <Card
        key={id}
        product={{ id, img, title, star, reviews, prevPrice, newPrice }}
        handleAddToCart={() => handleAddToCart({ id, img, title, star, reviews, prevPrice, newPrice })}
        handleAddToLike={() => handleAddToLike({ id, img, title, star, reviews, prevPrice, newPrice })}
      />
    ));
  }

  const result = filteredData(products, selectedCategory, query);

  const handleLogin = (credentials) => {

    console.log('Logging in with:', credentials);
   
  };

  return (
    <Router>
      <>
        <Sidebar handleChange={handleChange} />
        <Navigation query={query} handleInputChange={handleInputChange} handleLikeClick={() => {}} />
        <RecommendedComponent handleClick={handleClick} />

        <Routes>
          <Route
            path="/"
            element={<Products result={result} handleAddToCart={handleAddToCart} likedItems={likedItems} handleAddToLike={handleAddToLike} />}
          />
          <Route path="/cart" element={<Cart cartItems={cartItems || []} handleRemoveFromCart={handleRemoveFromCart} />} />
          <Route path="/like" element={<Like likedItems={likedItems} handleRemoveFromLike={handleRemoveFromLike} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
