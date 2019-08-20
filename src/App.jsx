import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from 'Components/navbar/navbar.component.jsx';
import HomePage from 'Pages/homepage/homepage.component.jsx';
import PokemonPage from 'Pages/pokemon-page/pokemon-page.component.jsx';
import CptPokemonsPage from 'Pages/captured-pokemons/captured-pokemons-page.component.jsx';
import RandomPage from 'Pages/random-page/random-page.component.jsx';
import './App.scss';

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
