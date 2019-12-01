import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';

import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/homepage/homepage.component';
import PokemonPage from './pages/pokemon-page/pokemon-page.hoc';
import FreePokemonsPage from './pages/pokemons-page/free-pokemons-page.hoc';
import CapturedPokemonsPage from './pages/pokemons-page/captured-pokemons-page.hoc';
import RandomPokemonPage from './pages/random-page/random-page.hoc';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';

import routesConstants from './routing/routes.constants';
import './App.scss';

const App = () => {
  const initialState = {
    currentUser: null
  };

  const [state, setState] = useState(initialState);
  const { currentUser } = state;

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setState({ ...state, currentUser: user });
    });
    return () => null;
  }, [currentUser]);

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
        <Route
          path={routesConstants.RANDOM_POKEMON_PAGE}
          component={RandomPokemonPage}
        />
        <Route
          path={routesConstants.SIGN_IN_AND_SIGN_UP}
          component={SignInAndSignUpPage}
        />
        <Route component={renderNoMatch} />
      </Switch>
    </>
  );
};

export default App;
