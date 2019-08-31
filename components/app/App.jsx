import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import { MainContainer } from '../../containers/MainContainer'
import {CaughtContainer} from '../../containers/CaughtContainer'
import { Header } from '../header/header'
import { Pokemon_page } from '../Pokemon_page/Pokemon_page'
import './app.scss';
import { PokemonPageContainer } from '../../containers/PokemonPageContainer';

 

export class App extends Component{

    render() {
        return ( 
            <BrowserRouter>
                <Header />
                <Route exact path="/" component={MainContainer} />
                <Route path="/caught" component={CaughtContainer}/>
                <Route path="/pokemon/:id" component={PokemonPageContainer}/>
            </BrowserRouter>
        );
    }
}