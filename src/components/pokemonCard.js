import Card from 'react-bootstrap/Card';
import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

class PokemonsCard extends Component {
    constructor(props){
      super(props);
      this.state = {
        pokemon: '',
        caught: false,
      };
    }
    
    componentDidMount(){
      this.setState({caught:this.props.pokemon.caught});
    }
    
    CatchPokemon(pokemonId, pokemonName){
      let url = 'http://localhost:3000/pokemons/'+pokemonId;
      let date = new Date();
      let today = ([date.getDate(), ('0'+(date.getMonth()+1)), date.getFullYear()]).join('-');
        fetch(url, {
          method: 'PUT',
          body: JSON.stringify({
            id: pokemonId,
            name: pokemonName,
            caught: true,
            date: today
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
          .then(response => response.json())
           .then(json =>{ console.log(json);
              this.setState({caught:true});
            })
    }
    render(){
      let pokemon  = this.props.pokemon; 
      let status = this.state.caught? "Caught!":"Catch";
        return(
          <Card style={{ width: "15rem" }} id={pokemon.id} className="m-2">
            <Card.Title className="top-name center-block text-center">
              {(pokemon.name).toUpperCase()}
            </Card.Title>
            <Link to={`pokemons/${pokemon.id}`}>
              <Card.Img variant="top" src={`images/img/${pokemon.id}.png`}/>
            </Link>
            <Button  disabled={this.state.caught} onClick={()=>{this.CatchPokemon(pokemon.id,pokemon.name)}} variant="primary">{status}</Button>
          </Card>
        )
    }
  }
      
 export default PokemonsCard;