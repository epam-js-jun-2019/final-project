import Card from 'react-bootstrap/Card';
import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

class PokemonsCard extends Component {
    constructor(props){
      super(props);
      this.state = {
        pokemon: '',
        catched: false,
      };
    }
    
    componentDidMount(){
      this.setState({catched:this.props.pokemon.catched});
    }
    
    CatchPokemon(POKEMON_ID, POKEMON_NAME){
      let url = 'http://localhost:3000/pokemons/'+POKEMON_ID;
      let date = new Date();
      let today = ([date.getDate(), ('0'+(date.getMonth()+1)), date.getFullYear()]).join('-');
        fetch(url, {
          method: 'PUT',
          body: JSON.stringify({
            id: POKEMON_ID,
            name: POKEMON_NAME,
            catched: true,
            date: today
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
          .then(response => response.json())
           .then(json =>{ console.log(json);
              this.setState({catched:true});
            })
    }
    render(){
      let pokemon  = this.props.pokemon; 
        return(
          <Card style={{ width: '15rem' }}  id={pokemon.id}>
            <Card.Title className="top-name center-block text-center">
              {(pokemon.name).toUpperCase()}
            </Card.Title>
            <Link to={`pokemons/${pokemon.id}`}>
              <Card.Img variant="top" src={`images/img/${pokemon.id}.png`}/>
            </Link>
            <Button  disabled={this.state.catched} onClick={()=>{this.CatchPokemon(pokemon.id,pokemon.name)}} variant="primary">Catch</Button>
          </Card>
        )
    }
  }
      
 export default PokemonsCard;