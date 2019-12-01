import React from 'react';
import { Link } from 'react-router-dom';
import routesConstants from '../../routing/routes.constants';
import './navbar.styles.scss';

const Navbar = () => (
  <nav className='navbar'>
    <Link className='logo-container' to={routesConstants.HOMEPAGE}>
      <img
        className='logo'
        src='/assets/images/Pokedex_logo.png'
        alt='Pokemon logo'
      />
    </Link>
    <div className='options'>
      <Link className='option' to={routesConstants.FREE_POKEMONS_PAGE}>
        Wild Pokemons
      </Link>
      <Link className='option' to={routesConstants.CAPTURED_POKEMONS_PAGE}>
        Captured Pokemons
      </Link>
      <Link className='option' to={routesConstants.RANDOM_POKEMON_PAGE}>
        Random Pokemon
      </Link>
      <Link className='option auth' to={routesConstants.SIGN_IN_AND_SIGN_UP}>
        Sign In
      </Link>
    </div>
  </nav>
);

export default Navbar;
