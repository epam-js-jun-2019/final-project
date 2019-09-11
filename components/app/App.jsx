import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';

import { MainContainer } from '../../containers/MainContainer'
import {CaughtContainer} from '../../containers/CaughtContainer'
import { PokemonPageContainer } from '../../containers/PokemonPageContainer';
import { Header } from '../header/header'
import './app.scss';
import {store} from '../../src/store';

 

export function App(){
    return ( 
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={MainContainer} />
                    <Route path="/caught" component={CaughtContainer}/>
                    <Route path="/pokemon/:id" component={PokemonPageContainer}/>
                </Switch>
            </BrowserRouter>
        </Provider>
        );
}