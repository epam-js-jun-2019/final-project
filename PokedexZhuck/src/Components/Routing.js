import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import MainPage from "./MainPage";
import CaughtPokemonPage from "./CaughtPokemonsPage";
import PokemonPersonalCard from "./PokemonPersonalCard";

const Routing = () => (
  <main>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/caught_pokemons" component={CaughtPokemonPage} />
      <Route path="/pokemons/:id" component={PokemonPersonalCard} />
    </Switch>
  </main>
);

export default Routing;
