import React from 'react';
import './app-header.css';

const AppHeader = () => {
    return (
        <nav className="app-header pokedex-header">
            <img className="logo"
                 src="./pokedex-icon.png"
                 alt="logo" />
            <button className="btn-link to-catched-poks">catched</button>
            <button className="btn-link to-free-poks">free</button>
        </nav>
    )
}

export default AppHeader;