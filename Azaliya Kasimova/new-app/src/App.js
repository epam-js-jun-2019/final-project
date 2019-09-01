import React from 'react';
import './App.css';
import List from './List';
import Caught from './Caught';
import { BrowserRouter, Route, Link} from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/" className="links">All Pokemons</Link></li>
        <li><Link to="/caught" className="links">Caught Pokemons</Link></li>
      </ul>
      <hr/>
      <Route exact path="/" component={List}/>
      <Route path="/caught" component={Caught}/>
    </div>
  </BrowserRouter>
)

export default App

