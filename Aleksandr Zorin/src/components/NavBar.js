import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/" className = "nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/catched" className = "nav-link">Catched</Link>
                </li>
                </ul>
        </nav>
    )
}

export default NavBar;