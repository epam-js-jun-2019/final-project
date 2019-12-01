import React from 'react';
import { Link } from 'react-router-dom';
import routesConstants from '../../routing/routes.constants';
import './navbar.styles.scss';

const Navbar = ({ userData, auth }) => (
  <nav className='navbar'>
    <Link className='logo-container' to={routesConstants.HOMEPAGE}>
      <img
        className='logo'
        src='/assets/images/Pokedex_logo.png'
        alt='Pokemon logo'
      />
    </Link>
    <ul className='options'>
      <li>
        <Link className='option' to={routesConstants.FREE_POKEMONS_PAGE}>
          Wild Pokemons
        </Link>
      </li>
      <li>
        <Link className='option' to={routesConstants.CAPTURED_POKEMONS_PAGE}>
          Captured Pokemons
        </Link>
      </li>
      <li>
        <Link className='option' to={routesConstants.RANDOM_POKEMON_PAGE}>
          Random Pokemon
        </Link>
      </li>
      {userData ? (
        <li>
          <div className='option auth' onClick={() => auth.signOut()}>
            Sign Out
          </div>
        </li>
      ) : (
        <li>
          <Link
            className='option auth'
            to={routesConstants.SIGN_IN_AND_SIGN_UP}
          >
            Sign In
          </Link>
        </li>
      )}
    </ul>
  </nav>
);

export default Navbar;
