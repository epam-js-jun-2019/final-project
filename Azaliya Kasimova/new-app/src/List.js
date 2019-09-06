import React from 'react';
import './App.css';
import data from './db.json';
import Button from './Button';
import AddInfo from './AddInfo';

function Pokemon(props) {
  return (
    <div className="card" key={props.pokemon.id}>
      <div className="card-img">
        <img 
        src = {process.env.PUBLIC_URL +'/pokemons/' + props.pokemon.id + '.png'}
        alt = {props.pokemon.name}/>
      </div>
      <div className="text">
        <h3>{props.pokemon.name}</h3>
      </div>
      <Button index = {props.pokemon.id} status = {props.status}/>
      <AddInfo name = {props.pokemon.name} index = {props.pokemon.id}
      source =  {process.env.PUBLIC_URL +'/pokemons/' + props.pokemon.id + '.png'}/>
    </div>
  )
}

class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {caughtPokemons: []};
    fetch('http://localhost:3001/caughtPokemons')
    .then(resp => resp.json())
    .then(data => {
      this.setState({caughtPokemons: data});
})
  }

  renderPokemons() {
    return data.pokemons.map(pokemon => {
      let status = false;
      for (let i = 0; i < this.state.caughtPokemons.length; i++) {
        if (this.state.caughtPokemons[i].id === pokemon.id) {   
          status = true;
            break;
      }
    }
      return (
        <Pokemon pokemon = {pokemon} key = {pokemon.id} status={status}/>
      )
    }).slice(0, 720)
  }

  render() {
    return(
      <div className = "app">
        <div className = "list">
          {this.renderPokemons()}
        </div>
      </div>
    )
  }
}

export default List;