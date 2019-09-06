import React from 'react';
import './App.css';
import data from './db.json';

class Button extends React.Component {
  constructor (props) {
    super(props)
    this.state = {pokemonIndex: this.props.index}
    
    this.handleClick = this.handleClick.bind(this)
    this.makeArray = this.makeArray.bind(this)

  }

  makeArray(number) {
    let arr
    for (let i = 0; i < data.pokemons.length; i++) {
      if (data.pokemons[i].id === number) {
        arr = data.pokemons[i]
      }
    }
    return arr 
  }
  
  handleClick() {
    return fetch('http://localhost:3001/caughtPokemons', {
      method: 'POST', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
          'Content-Type': 'application/json',
      },
      redirect: 'follow', 
      referrer: 'no-referrer', 
      body: JSON.stringify(this.makeArray(this.state.pokemonIndex)),
  })
      .then(response => response.json())
  }

  render() {
    return (
    <input type="button" value="CATCH" onClick={this.handleClick}>  
      </input>
    )
  }
}
export default Button;