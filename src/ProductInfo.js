import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductInfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl mb-4">{product.title}</h1>
      <div className="mb-4">
        <img src={product.image} alt={product.title} className="w-32 h-32 object-cover rounded" />
      </div>
      <p className="text-gray-700">${product.price}</p>
      <p className="mb-4">{product.description}</p>
    </div>
  );
}

export default ProductInfo;