import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FirstPage from '../components/pages/firstpage';
import CatchedPokemons from '../components/pages/catchedpage';
import AboutApp from '../components/pages/aboutpage';
import PokemonPage from '../components/pages/pokemonpage';
import NoMatch from '../components/pages/nomatch';


class Switchpath extends React.Component {
    render(){
    return(
        <Switch>
            <Route exact path = "/" component = {FirstPage} />
            <Route path = "/p/:id" component = {PokemonPage} />
            <Route path = "/catched" component = {CatchedPokemons} />
            <Route path = "/about" component = {AboutApp} />
            <Route component = {NoMatch} />
        </Switch>
    );
}}
export default Switchpath;