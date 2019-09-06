import React from 'react';
import { Link } from 'react-router-dom';
import './app-header.css';
import icon from './header-icon.png';

const AppHeader = (props) => {
    return (
        <nav className="app-header pokedex-header">
            <Link to="/">
                <img className="logo"
                     src={icon}
                     onClick={props.toCatched}
                     alt="logo" />
            </Link>
            <Link to="/catched">
                <button className="btn-link to-catched-poks"
                        onClick={props.toCatched}>
                    catched
                </button>
            </Link>
        </nav>
    )
}

export default AppHeader;