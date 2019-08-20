import React from 'react';
import { connect } from 'react-redux';

import './pokemon-page.styles.scss';

class PokemonPage extends React.Component {
  render() {
    const { collection, location } = this.props;
    const pokemonID = +location.pathname.split('/pokemon/')[1];
    const currentPokemon = collection.filter(
      pokemon => pokemon.id === pokemonID
    )[0];
    const { id, name, status, captureDate } = currentPokemon;
    return (
      <div>
        <img
          className='bg-image'
          src={`../../assets/images/pokemons-images/${id}.png`}
          alt='pokemon'
        />
        <div className='pokemon-info'>
          <h1>{name.split('')[0].toUpperCase() + name.slice(1)}</h1>
          <img
            className='pokemon-image'
            src={`../../assets/images/pokemons-images/${id}.png`}
            alt='pokemon'
          />
          <span>
            Status: <span className='focus'>{status}</span>
          </span>
          <span>
            Capture Date: <span className='focus'>{captureDate}</span>
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ pokemons: { pokemons } }) => ({
  collection: pokemons
});

export default connect(mapStateToProps)(PokemonPage);
