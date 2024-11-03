import React from 'react';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import './css/GundamStyles.css';

const ProductList = () => {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;