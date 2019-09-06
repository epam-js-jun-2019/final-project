import React from "react";
import {NavLink} from "react-router-dom";

const HeaderMenu = () => (
    <header>
        <nav
            className="navbar navbar-expand-lg navbar-dark bg-dark"
            style={{marginBottom: "3%"}}
        >
            <NavLink className="nav-link" to="/">
                <span className="navbar-brand">Pokedex</span>
            </NavLink>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/">
                            <span>Main</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/caught_pokemons">
                            <span>Your collection</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default HeaderMenu;
