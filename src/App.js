import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import PokemonPage from './pages/pokemon-page/pokemon-page.component';
import CptPokemonsPage from './pages/captured-pokemons/captured-pokemons-page.component';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/pokemon' component={PokemonPage} />
      <Route path='/cpt-pokemons' component={CptPokemonsPage} />
    </Switch>
  );
}

export default App;
