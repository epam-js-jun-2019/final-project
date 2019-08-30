import React from "react";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">Home</Link>

        <Link className="navbar-item" to="/catched">Catched</Link>
      </div>
    </nav>
  );
};

export default Header