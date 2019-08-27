import React from 'react';
import{ Link } from"react-router-dom";

const NavBar = () => {
    return (
    <>
        <p>Pokedox</p>
        <Link to='/'>Show all </Link>
        <Link to='/catched'>Catched </Link>
        <Link to='/about'>About </Link>
    </>
    )
};

export default NavBar;
