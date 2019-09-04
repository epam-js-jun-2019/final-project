import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render () {
    return (
      <header className="header col-12 row align-items-center border-bottom border-danger">
        <span className="logo-image col-1">
          <Link to="/"><img src="https://raw.githubusercontent.com/epam-js-jun-2019/final-project/master/pokemons/25.png" className="logo" alt="logo"/></Link>
        </span>
        <span className="col-11 col-md-7">
          <h1 className="text-warning">PokeDex</h1>
        </span>
        <span className="col">
          <p className="d-inline-block">
            <Link to="/" className="text-danger">Главная</Link>
          </p>
        </span>
        <span className="col">
          <p className="d-inline-block">
            <Link to="/caught/" className="text-danger">Пойманные</Link>
          </p>
        </span>  
      </header>
    );
  }
}

export default Header;
