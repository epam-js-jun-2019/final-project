import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
class PokemonDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemon: '',
      caught: false
    };
  }

  componentDidMount(){
    let url = 'http://localhost:3000/pokemons/'+ this.props.match.params.id;
    fetch(url)
      .then(response => response.json())
        .then(json => {this.setState({pokemon: json}); 
                      this.setState({caught:json.caught});}
        )
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
        caught: true,
        date: today
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
        .then(json =>{ console.log(json);
            this.setState({caught:true});}
        )
  }
  
  render(){
    return(
      <Container className="d-flex flex-row justify-content-center p-3">
        <Card style={{ width: '30rem' }}>
          <Card.Title className="p-3">#{this.props.match.params.id} 
            <h2 className="top-name center-block text-center">{this.state.pokemon.name}</h2>
          </Card.Title>
          <Card.Img variant="top" src={`http://localhost:3001/images/img/${this.props.match.params.id}.png`}/>
          <Card.Subtitle className="text-muted center-block text-center p-3">{this.state.pokemon.caught ? 'Caught' : 'Not caught'} {this.state.pokemon.date}</Card.Subtitle>
          <Button  disabled={this.state.caught} onClick={()=>{this.CatchPokemon(this.state.pokemon.id, this.state.pokemon.name)}} variant="primary">Catch</Button>
        </Card>   
      </Container>      
    )
  }
}   

export default PokemonDetails;
