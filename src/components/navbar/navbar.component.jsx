import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.styles.scss';

const Navbar = () => (
  <nav className='navbar'>
    <Link className='logo-container' to='/'>
      <img
        className='logo'
        src='../../assets/images/Pokedex_logo.png'
        alt='Pokemon logo'
      />
    </Link>
    <div className='options'>
      <Link className='option' to='/free-pokemons'>
        Wild Pokemons
      </Link>
      <Link className='option' to='/captured-pokemons'>
        Captured Pokemons
      </Link>
      <Link className='option' to='/random-page'>
        Random Pokemon
      </Link>
    </div>
  </nav>
);

export default Navbar;
