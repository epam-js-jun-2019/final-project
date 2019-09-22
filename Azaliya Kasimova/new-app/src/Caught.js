import React from 'react';
import './App.css';

class Caught extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caughtPokemon: [],
    };
  }

  componentDidMount() {

    fetch('http://localhost:3001/caughtPokemons')
      .then(resp => resp.json())
      .then(data => {
        let caughtPokemon = data.map((pokemon, index) => {
          return (
              <div className="card" key={pokemon.id}>
                <div className="card-img">
                  <img 
                  src = {process.env.PUBLIC_URL +'/pokemons/' + pokemon.id + '.png'}
                  alt = {pokemon.name}/>
                  </div>
                  <h3>{pokemon.name}</h3>
                </div>    
          )
        })
        this.setState({caughtPokemon: caughtPokemon});
  })
}  
    render() {
      return (
        <div className = "app">
          <div className = "list">
          {this.state.caughtPokemon}
          </div>
        </div>
      );
      }
  }
  
export default Caught;