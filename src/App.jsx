import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { getPokemonsAsync } from 'Redux/pokemons/pokemons.actions';

import Navbar from 'Components/navbar/navbar.component';
import HomePage from 'Pages/homepage/homepage.component';
import PokemonPage from './HOCs/pokemon-page.hoc';
import FreePokemonsPage from './HOCs/free-pokemons-page.hoc';
import CapturedPokemonsPage from './HOCs/captured-pokemons-page.hoc';
import RandomPage from './HOCs/random-page.hoc';
import AppRoutesConstants from './routing/routes.constants';
import './App.scss';

const NoMatch = () => <div>The page doesn't exist</div>;

class App extends React.Component {
  componentDidMount() {
    this.props.getPokemonsAsync();
  }
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route
            exact
            path={AppRoutesConstants.HOMEPAGE}
            component={HomePage}
          />
          <Route
            path={AppRoutesConstants.POKEMON_PAGE}
            component={PokemonPage}
          />
          <Route
            path={AppRoutesConstants.FREE_POKEMONS_PAGE}
            component={FreePokemonsPage}
          />
          <Route
            path={AppRoutesConstants.CAPTURED_POKEMONS_PAGE}
            component={CapturedPokemonsPage}
          />
          <Route path={AppRoutesConstants.RANDOM_PAGE} component={RandomPage} />
          <Route component={NoMatch} />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getPokemonsAsync: () => dispatch(getPokemonsAsync())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
