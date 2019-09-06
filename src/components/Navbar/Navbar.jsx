import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { isEmpty } from 'lodash';
import cn from 'classnames';
import './navbar.css';

export default function Navbar({ catchedPokemons }) {
  const classes = cn({
    'nav-link': true,
    disabled: !!isEmpty(catchedPokemons),
  });

  return (
    <nav className="sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">Pokedex</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/catched" className={classes}>Catched</NavLink>
        </li>
      </ul>
    </nav>
  );
}
