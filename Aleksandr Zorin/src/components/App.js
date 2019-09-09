import React from 'react';
import Pokemons from './Pokemons';
import PokemonPage from './PokemonPage';
import { BrowserRouter,Switch, Route  } from 'react-router-dom';
import NavBar from './NavBar';
import CatchedPokemons from './CatchedPokemons';

function App() {
  return (
      <BrowserRouter>
      <NavBar/>
        <Switch>
          <Route exact path="/" component={Pokemons} />
          <Route path="/pokemons/:id" component={PokemonPage} />
          <Route path="/catched" component={CatchedPokemons} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;