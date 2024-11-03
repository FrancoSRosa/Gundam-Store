import React from 'react';
import './css/GundamStyles.css';
const Register = () => {
  return (
    <form>
      <h2>Registro</h2>
      <input type="text" placeholder="Nombre" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Contraseña" required />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default Register;