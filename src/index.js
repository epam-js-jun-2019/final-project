import React from "react";
import ReactDOM from "react-dom";
import App from "./components/pokemons";
import PokemonDetails from "./components/pokemonDetails"
import CatchedPokemons from "./components/catchedPokemons";
import Nav from 'react-bootstrap/Nav';
import PageNotFound from './components/pageNotFound'
import Main from "./components/main";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

ReactDOM.render(  <div className="cantainer-fluid "> 
    <h1 >pokedex</h1>
    <Nav variant="tabs">
      <Nav.Item>
        <Nav.Link href="/">Main</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link  href="/pokemons">All pokemons</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/catched">Catched pokemons</Nav.Link>
      </Nav.Item>
    </Nav>
    <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/pokemons" component={App}/>
        <Route path="pokemons/:id" component={PokemonDetails}/>
        <Route path="/catched" component={CatchedPokemons}/>
        <Route component={PageNotFound}/>
      </Switch>
    </Router>
  </div>
     , document.getElementById("root"));
