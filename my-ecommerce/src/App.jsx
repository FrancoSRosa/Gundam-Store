import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Register from './components/Register';
import Login from './components/Login';
import './components/css/Gundamstyles.css';
import "./App.css";
import NotFound from './components/NotFound'; // Create this component

const App = () => {
  return (
    <Router>
      <div>
        <h1>Mi Ecommerce Gundam</h1>
        <nav className='menu'>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/register">Registro</Link></li>
            <li><Link to="/login">Iniciar Sesión</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ProductList />} /> 
          <Route path="/product/:id" element={<ProductDetail />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="*" element={<NotFound />} /> {/* Manejo de 404 */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;