import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

class SmallCard extends React.Component {

  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount () {
    if (this.props.pokemon.id !== undefined) {
    fetch(`http://localhost:3000/pokemons/${this.props.pokemon.id}`)
      .then(response => response.json())
      .then(data => this.setState({ pokemon: data }))
      
      
    }
  }

  handleClick() {
    this.setState({
      active: !this.state.active
    });

    const { pokemon } = this.props;
    const url = 'http://localhost:3000/caught';
    const data = {name: pokemon.name,
                  id: pokemon.id,
                  pokemonId: pokemon.id,};

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .catch(error => console.error('Ошибка:', error));
  }

  render () {
    let pokemonStatus = true;
    
    if (this.state) {
      pokemonStatus = this.state.active;
    }

    const { pokemon } = this.props;
    
    return (
      
        <Card title={`${pokemon.name}`} extra={<a href="#">More</a>} style={{ width: 300, margin: 10 }}>
         <img src={`/pokemons/${pokemon.id}.png`} width='80%' />
        </Card>


      
    );
  }
}

export default SmallCard;