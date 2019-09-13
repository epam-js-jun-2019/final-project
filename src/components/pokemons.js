import React, { Component } from "react";
import PokemonCard from "./pokemonCard";
import PokemonDetails from "./pokemonDetails"
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PageNotFound from './pageNotFound'
import Loader from './loader';

class PokemonsList extends Component {
  constructor(props){
    super(props);
    this.abortController = new AbortController();
    this.state = {
      pokemons: [],
      cards: 15,
      loading: false,
      morePokemons: true
    };
    this.loadMore = this.loadMore.bind(this);
  }

componentDidMount(){ 
  this.setState({loading:true})
  let url = 'http://localhost:3000/pokemons';
  fetch(url,{signal: this.abortController.signal})
    .then(response => response.json())
      .then(data=> {data = data.map((pokemon) => {return pokemon}); 
        this.setState({pokemons: data, loading:false})}
      );
}

componentWillUnmount(){
  this.abortController.abort();
} 

checkMorePokemons(){
  if (this.state.cards+15 >= this.state.pokemons.length){
    this.setState({morePokemons:false})
  }
}

loadMore(){
  this.checkMorePokemons();
  this.setState((prev) => {
    return {cards: prev.cards + 15};
  });
}
  
  render(){
    if (this.state.loading==true){
      return(
        <Loader/>
      )
    }
    else{
      return(
        <div className="d-flex flex-column justify-content-center p-1">
            <div className="d-flex flex-row flex-wrap container-fluid justify-content-around">
              {this.state.pokemons.slice(0, this.state.cards).map((pokemon, index) => {
                return(
                  <PokemonCard pokemon={pokemon} key={index}/>
                )})
              }
            </div>
            <Button onClick={this.loadMore} variant="primary" disabled={!(this.state.morePokemons)}  style={{ width: "10rem" }} className="align-self-center m-4">Load more</Button></div>  
      )
    }
  }
}

        

export default PokemonsList;