import React from 'react';
import './App.css';

class Caught extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caughtPokemons: [],
    };
  }

  componentDidMount() {

    fetch('http://localhost:3001/caughtPokemons')
      .then(resp => resp.json())
      .then(data => {
        let caughtPokemons = data.map((pokemon, index) => {
          return (
              <div className="card">
                <div className="card-img">
                  <img 
                  src = {process.env.PUBLIC_URL +'/pokemons/' + pokemon.id + '.png'}
                  alt = {pokemon.name}/>
                  </div>
                  <h3>{pokemon.name}</h3>
                </div>    
          )
        })
        this.setState({caughtPokemons: caughtPokemons});
  })
}  
    render() {
      return (
        <div className = "app">
          <div className = "list">
          {this.state.caughtPokemons}
          </div>
        </div>
      );
      }
  }
  
export default Caught;