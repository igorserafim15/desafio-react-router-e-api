import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header container'>
      <nav>
        <NavLink to="/" end>Produtos</NavLink>
        <NavLink to="contato">Contato</NavLink>
      </nav>
    </header>
  )
};

export default Header;
