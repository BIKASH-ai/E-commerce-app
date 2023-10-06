import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProductInfo from './ProductInfo';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductInfo />} />
    </Routes>
  );
}

export default MyRoutes;