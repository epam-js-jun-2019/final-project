import React, { Component } from 'react'
import PokemonCard from './PokemonCard';

class Pokemons extends Component {
  
  constructor(props) {
    super(props);
    this.state = {isLoad:false, pokemons:[]};
    this.currentPage = 1;
    this.request = this.props.catched ? "http://localhost:3000/pokemons?date_ne&limit=15&_page=" : "http://localhost:3000/pokemons?limit=15&_page="

    this.loadData = this.loadData.bind(this);
  }

  render() {
    if  (this.state.isLoad) {
    const pokemonCards = this.state.pokemons.map(pokemon => <PokemonCard key = {pokemon.id} pokemon = {pokemon} />);
    return <div><div className = "pokemonContainer">{pokemonCards}</div> <button className="btn btn-primary" onClick = {this.loadData}>Load more...</button></div>; 
    } else {
      return <p>loading...</p>;
    }
  }

  loadData() {
    fetch(this.request+this.currentPage)
    .then(response =>  response.json())
    .then(data => {
      this.state.pokemons.push(...data);
      this.currentPage++;
      this.setState({isLoad : true });
    })
  }

  componentDidMount() {
    this.loadData();
  }
}
export default Pokemons;
