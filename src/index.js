import React from "react";
import ReactDOM from "react-dom";
import App from "./components/pokemons";
import PokemonDetails from "./components/pokemonDetails"
import CaughtPokemons from "./components/caughtPokemons";
import Nav from 'react-bootstrap/Nav';
import PageNotFound from './components/pageNotFound'
import Main from "./components/mainPage";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

ReactDOM.render(  <div className="d-flex flex-column"> 
  <header className="sticky-top bg-light"> 
  <h1 className="pl-3">pokedex</h1>
    <Nav variant="tabs">
      <Nav.Item>
        <Nav.Link href="/">Main</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link  href="/pokemons">All pokemons</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/caught">Caught pokemons</Nav.Link>
      </Nav.Item>
    </Nav>
    </header>
    <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/pokemons" component={App}/>
        <Route path="/pokemons/:id" component={PokemonDetails}/>
        <Route path="/caught" component={CaughtPokemons}/>
        <Route component={PageNotFound}/>
      </Switch>
      </Router>
    <footer className="text-center text-muted sticky-bottom">
      POKEDEX, Firsova Alina for EPAM 2019 <a href="https://www.github.com/AlinaFirsova"><img src="http://localhost:3001/images/gitlogo.png"/></a> 
    </footer>
   
  </div>
     , document.getElementById("root"));
