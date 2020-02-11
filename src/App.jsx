import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/navbar/navbar.hoc';
import HomePage from './pages/homepage/homepage.component';
import PokemonPage from './pages/pokemon-page/pokemon-page.hoc';
import FreePokemonsPage from './pages/pokemons-page/free-pokemons-page.hoc';
import CapturedPokemonsPage from './pages/pokemons-page/captured-pokemons-page.hoc';
import RandomPokemonPage from './pages/random-page/random-page.hoc';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';

import routesConstants from './routing/routes.constants';
import './App.scss';

const App = ({ checkUserSession, userData, isLoadingUser, currentPokemon }) => {
  useEffect(() => {
    checkUserSession();
  }, []);

  const renderNoMatch = () => (
    <div className='no-match-page'>The page doesn't exist</div>
  );

  return (
    <>
      <Navbar />
      {isLoadingUser ? (
        <h1 style={{ color: 'wheat', fontSize: '6rem' }}>Loading...</h1>
      ) : (
        <Switch>
          <Route exact path={routesConstants.HOMEPAGE}>
            {userData ? (
              <HomePage />
            ) : (
              <Redirect to={routesConstants.SIGN_IN_AND_SIGN_UP} />
            )}
          </Route>
          <Route
            path={`${routesConstants.POKEMON_PAGE}${currentPokemon.photoId}`}
          >
            {userData ? (
              <PokemonPage />
            ) : (
              <Redirect to={routesConstants.SIGN_IN_AND_SIGN_UP} />
            )}
          </Route>
          <Route path={routesConstants.FREE_POKEMONS_PAGE}>
            {userData ? (
              <FreePokemonsPage />
            ) : (
              <Redirect to={routesConstants.SIGN_IN_AND_SIGN_UP} />
            )}
          </Route>
          <Route path={routesConstants.CAPTURED_POKEMONS_PAGE}>
            {userData ? (
              <CapturedPokemonsPage />
            ) : (
              <Redirect to={routesConstants.SIGN_IN_AND_SIGN_UP} />
            )}
          </Route>
          <Route path={routesConstants.RANDOM_POKEMON_PAGE}>
            {userData ? (
              <RandomPokemonPage />
            ) : (
              <Redirect to={routesConstants.SIGN_IN_AND_SIGN_UP} />
            )}
          </Route>
          <Route path={routesConstants.SIGN_IN_AND_SIGN_UP}>
            {userData ? (
              <Redirect to={routesConstants.HOMEPAGE} />
            ) : (
              <SignInAndSignUpPage />
            )}
          </Route>
          <Route component={renderNoMatch} />
        </Switch>
      )}
    </>
  );
};

export default App;
