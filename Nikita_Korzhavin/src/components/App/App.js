import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import NavBar from '../navbar/navBar';
import UsualPokemons from '../../containers/usualPokemons';
import CatchedPokemonsList from '../pokemonsList/catchedPokemons';
import PokemonCard from '../pokemonCard/pokemonCard';

import './app.css';


const App = ( props ) => {
  return  (
  <main>
    <NavBar/>
    <Switch>
      <Route exact path="/pokemon/:id" component={ PokemonCard }/>
      <Route exact path="/catched" component={ CatchedPokemonsList }/>
      <Route exact path="/pokemons" component={ UsualPokemons }/>
      <Redirect  path="/" to="/pokemons"/>
    </Switch>
  </main>
  )
}


export default App;