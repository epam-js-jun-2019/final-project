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
      <Button index = {props.pokemon.id} />
      <AddInfo name = {props.pokemon.name} index = {props.pokemon.id}
      source =  {process.env.PUBLIC_URL +'/pokemons/' + props.pokemon.id + '.png'}/>
    </div>
  )
}

class List extends React.Component {

  renderPokemons() {
    return data.pokemons.map(pokemon => {
      return (
        <Pokemon pokemon = {pokemon} key = {pokemon.id} />
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