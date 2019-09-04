import React from 'react';
import './App.css';
import Card from './Card';

class List extends React.Component {

  constructor() {
    super();

    this.state = {
      pokemons: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemons?_page=1&_limit=30')
      .then(response => response.json())
      .then(data => this.setState({ pokemons: data }))
      .then(this.setState({ counter: 2 }));
      
  }

  handleClick() {
    fetch(`http://localhost:3000/pokemons?_page=${this.state.counter}&_limit=30`)
    .then(response => response.json())
    .then(data => this.setState({ pokemons: this.state.pokemons.concat(data) }))
    .then(this.setState({ counter: this.state.counter+1 }));
    
  }

  render () {

    let pokemons = this.state.pokemons;
    let ifDisabled;
      if (pokemons.length < 30) {
        ifDisabled = true;
      } else {
        ifDisabled = false;
      }

    return (
      <div className="main-content">
        <div className="pokemon-list card-columns">
          {pokemons.map(pokemon =>
            <Card pokemon = {pokemon} key = {pokemon.id}/>)
          }
        </div>
        <div className="load-more">
          <button className="load-more__btn btn btn-danger" type="button" onClick={this.handleClick} disabled={ifDisabled}>Показать ещё</button>
        </div>
      </div>
    );
  }
}

export default List;
