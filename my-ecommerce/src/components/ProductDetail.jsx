import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import './css/GundamStyles.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <h2>Producto no encontrado</h2>;

  return (
    <div >
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="product-image" />
      <p>Precio: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <p>Código: {product.code}</p>
    </div>
  );
};

export default ProductDetail;