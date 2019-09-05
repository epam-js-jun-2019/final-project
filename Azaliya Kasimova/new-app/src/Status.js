import React from 'react';
import './App.css';

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonStatus: '',
      pokemonID: this.props.index
    };

  }

componentDidMount() {

  fetch('http://localhost:3001/caughtPokemons')
    .then(resp => resp.json())
    .then(data => {
      let text = ' is not caught'
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === this.state.pokemonID) {   
          text = ' caught';
           break;
        }
      }
      this.setState({pokemonStatus: text});
})
} 
    render() {
      return ( <p>Status: {this.state.pokemonStatus}</p>);
      }
    }

export default Status;