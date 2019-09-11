import './Header.scss';
import { Link  } from 'react-router-dom';
import React from 'react';

export function Header (){
    const homePage="/";
    const caughtPage="/caught";
    return (
        <header>
            <Link to={homePage}><h1  className="text">Pokedex</h1></Link>
            <Link to={caughtPage}><span className="text">Пойманные покемоны</span></Link>
        </header>
    )
}
