import React, { useState } from 'react';

const AddProductPopup = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, price });
    setTitle('');
    setPrice('');
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded">
        <h2 className="text-2xl mb-4">Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddProductPopup;