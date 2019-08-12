import React from 'react';
import './App.css';
import Header from './Header';
import List from './List';
import Footer from './Footer';
import Pokemon from './Pokemon';
import Caught from './Caught';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app row">
      <Router>
        <Header />
        <Route path="/" exact component={List} />
        <Route path="/caught/" component={Caught} />
        <Route path="/pokemons/:id" component={Pokemon} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
