import './header.scss';
import { BrowserRouter, Route, Link  } from 'react-router-dom';
import React, { Component } from 'react';

export class Header extends Component{
    render(){
        
        return (
                <header>
                    <Link to="/"><h1  className="text">Pokedex</h1></Link>
                    <Link to="/caught"><span className="text">Пойманные покемоны</span></Link>
                </header>
        )
    }
}