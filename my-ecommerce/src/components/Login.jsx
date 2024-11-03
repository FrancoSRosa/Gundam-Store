import React from 'react';
import './css/Login.css'; 

const Login = () => {
  return (
    <form>
      <h1>Login</h1>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Contraseña" required />
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default Login;