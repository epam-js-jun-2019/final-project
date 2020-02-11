import React from 'react';
import { Link } from 'react-router-dom';
import routesConstants from '../../routing/routes.constants';
import imgSrc from '../../assets/images/Pokedex_logo.png';
import './navbar.styles.scss';

const Navbar = ({ userData, auth, onUserSignOut }) => {
  const onSignOut = async () => {
    await auth.signOut();
    onUserSignOut();
  };
  return (
    <nav className='navbar'>
      <Link className='logo-container' to={routesConstants.HOMEPAGE}>
        <img className='logo' src={imgSrc} alt='Pokemon logo' />
      </Link>
      {userData && (
        <div className='user'>
          <img
            className='user-avatar'
            src={userData.photoURL || 'https://picsum.photos/150'}
          />
          <p className='user-name'>{userData.displayName}</p>
        </div>
      )}
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
            <Link
              to={routesConstants.SIGN_IN_AND_SIGN_UP}
              className='option auth'
              onClick={onSignOut}
            >
              Sign Out
            </Link>
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
};

export default Navbar;
