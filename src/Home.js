import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  }

  const handleSort = (sortBy) => {
    const sortedProducts = [...products].sort((a, b) => {
      return sortBy === 'lowToHigh' ? a.price - b.price : b.price - a.price;
    });
    setProducts(sortedProducts);
  }

  return (
    <div>
      <h1 className="text-2xl mb-4">Product List</h1>
      <div className="flex mb-4">
        <select onChange={(e) => handleSort(e.target.value)} className="p-2 rounded border">
          <option value="">Sort by Price</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default Home;
