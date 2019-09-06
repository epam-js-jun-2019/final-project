import React from 'react';
import { Link } from 'react-router-dom';
import AppRoutesConstants from '../../routing/routes.constants';
import './navbar.styles.scss';

const Navbar = () => (
  <nav className='navbar'>
    <Link className='logo-container' to={AppRoutesConstants.HOMEPAGE}>
      <img
        className='logo'
        src='/assets/images/Pokedex_logo.png'
        alt='Pokemon logo'
      />
    </Link>
    <div className='options'>
      <Link className='option' to={AppRoutesConstants.FREE_POKEMONS_PAGE}>
        Wild Pokemons
      </Link>
      <Link className='option' to={AppRoutesConstants.CAPTURED_POKEMONS_PAGE}>
        Captured Pokemons
      </Link>
      <Link className='option' to={AppRoutesConstants.RANDOM_PAGE}>
        Random Pokemon
      </Link>
    </div>
  </nav>
);

export default Navbar;
