import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/homepage/homepage.component';
import PokemonPage from './pages/pokemon-page/pokemon-page.hoc';
import FreePokemonsPage from './pages/pokemons-page/free-pokemons-page.hoc';
import CapturedPokemonsPage from './pages/pokemons-page/captured-pokemons-page.hoc';
import RandomPage from './pages/random-page/random-page.hoc';
import routesConstants from './routing/routes.constants';
import './App.scss';

const App = () => {
  const renderNoMatch = () => (
    <div className='no-match-page'>The page doesn't exist</div>
  );

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path={routesConstants.HOMEPAGE} component={HomePage} />
        <Route path={routesConstants.POKEMON_PAGE} component={PokemonPage} />
        <Route
          path={routesConstants.FREE_POKEMONS_PAGE}
          component={FreePokemonsPage}
        />
        <Route
          path={routesConstants.CAPTURED_POKEMONS_PAGE}
          component={CapturedPokemonsPage}
        />
        <Route path={routesConstants.RANDOM_PAGE} component={RandomPage} />
        <Route component={renderNoMatch} />
      </Switch>
    </>
  );
};

export default App;
