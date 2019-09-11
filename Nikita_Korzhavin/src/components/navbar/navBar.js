import React from 'react';
import { Link } from 'react-router-dom'
import setPageType from '../../utils/setPageType'
import './nav.css'

const NavBar = ( { path } ) => {
  const pageType = setPageType(path);
  
  return (
    <nav className="navbar navbar-expand-sm .navbar-dark bg-dark fixed-top ">
      <Link to='/pokemons' className="navbar-brand " >
        <img 
          className="img-fluid nav-logo" 
          src={ "https://www.freepnglogos.com/uploads/gotta-catch-em-all-transparent-pokemon-logo-11.png" }
        />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="" id="navbarNav">
         <ul className="navbar-nav">
          <li className={`nav-item m-2 pokemon-link ${ pageType === 'pokemons' ? "active": ""}`}>
            <Link to={ '/pokemons'} className="nav-link text-light" >All Pokemons</Link>
          </li>
          <li className={`nav-item m-2 pokemon-link ${ pageType === 'catchedPokemons' ? "active": ""}`}>
             <Link to={'/catched' } className="nav-link text-light" > Catched Pokemons</Link>
          </li>
         </ul>
      </div>
    </nav>
   
  )
}

export default NavBar ;
