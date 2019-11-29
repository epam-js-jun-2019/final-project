import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from 'Components/navbar/navbar.component';
import HomePage from 'Pages/homepage/homepage.component';
import PokemonPage from 'Pages/pokemon-page/pokemon-page.hoc';
import FreePokemonsPage from 'Pages/pokemons-page/free-pokemons-page.hoc';
import CapturedPokemonsPage from 'Pages/pokemons-page/captured-pokemons-page.hoc';
import RandomPage from 'Pages/random-page/random-page.hoc';
import AppRoutesConstants from './routing/routes.constants';
import './App.scss';

class App extends React.Component {
  componentDidMount() {
    const { getPokemonsAsync } = this.props;
    getPokemonsAsync();
  }

  NoMatch = () => <div>The page doesn't exist</div>;

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
          <Route component={this.NoMatch} />
        </Switch>
      </>
    );
  }
}

export default App;
