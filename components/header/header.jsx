import './header.scss';
import { Link  } from 'react-router-dom';
import React from 'react';

export function Header (){
    return (
        <header>
            <Link to="/"><h1  className="text">Pokedex</h1></Link>
            <Link to="/caught"><span className="text">Пойманные покемоны</span></Link>
        </header>
    )
}
