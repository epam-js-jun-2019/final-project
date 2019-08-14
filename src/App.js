import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/homepage/homepage.component';
import PokemonPage from './pages/pokemon-page/pokemon-page.component';
import CptPokemonsPage from './pages/captured-pokemons/captured-pokemons-page.component';
import RandomPage from './pages/random-page/random-page.component';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/pokemon/:id' component={PokemonPage} />
        <Route path='/captured-pokemons' component={CptPokemonsPage} />
        <Route path='/random-page' component={RandomPage} />
      </Switch>
    </div>
  );
}

export default App;
