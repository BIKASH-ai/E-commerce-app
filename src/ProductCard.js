import React from 'react';

const ProductCard = ({ product, onDelete }) => {
  return (
    <div className="border p-4">
      <h2 className="text-xl mb-2">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
      <button onClick={() => onDelete(product.id)} className="mt-2 bg-red-500 text-white px-3 py-1 rounded">Delete</button>
    </div>
  );
}

export default ProductCard;