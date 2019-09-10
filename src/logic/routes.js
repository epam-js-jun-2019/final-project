import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FirstPage from '../components/pages/firstpage';
import CatchedPokemons from '../components/pages/catchedpage';
import AboutApp from '../components/pages/aboutpage';
import PokemonPage from '../components/pages/pokemonpage';
import NoMatch from '../components/pages/nomatch';
import * as consts from '../constants/const';

class Switchpath extends React.Component {
    render(){
    return(
        <Switch>
            <Route exact path = {consts.PATH_MAIN} component = {FirstPage} />
            <Route path = {`${consts.PATH_POKEMON}/:id`} component = {PokemonPage} />
            <Route path = {consts.PATH_CATCHED} component = {CatchedPokemons} />
            <Route path = {consts.PATH_ABOUT} component = {AboutApp} />
            <Route component = {NoMatch} />
        </Switch>
    );
}}
export default Switchpath;