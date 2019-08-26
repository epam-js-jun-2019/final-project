import React from 'react';
import { connect } from 'react-redux';

import './pokemon-page.styles.scss';

class PokemonPage extends React.Component {
  render() {
    const { freePokemons, capturedPokemons, match } = this.props;
    const pokemonID = +match.params.pokemonID;
    let currentPokemon =
      freePokemons.filter(pokemon => pokemon.id === pokemonID)[0] ||
      capturedPokemons.filter(pokemon => pokemon.id === pokemonID)[0];
    const { id, name, status, captureDate } = currentPokemon;
    return (
      <div style={{ position: 'relative' }}>
        <div
          className='background-image'
          style={{
            backgroundImage: `url(../../assets/images/pokemons-images/${id}.png)`
          }}
        />
        <div className='pokemon-info'>
          <h1 className='pokemon-title'>
            {name.split('')[0].toUpperCase() + name.slice(1)}
          </h1>
          <img
            className='pokemon-image'
            src={`../../assets/images/pokemons-images/${id}.png`}
            alt='pokemon'
          />
          <span>
            ID: <span className='pokemon-info_focus'>{id}</span>
          </span>
          <span>
            Status: <span className='pokemon-info_focus'>{status}</span>
          </span>
          {captureDate !== 'none' ? (
            <span>
              Capture Date:{' '}
              <span className='pokemon-info_focus'>{captureDate}</span>
            </span>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ pokemons: { freePokemons, capturedPokemons } }) => ({
  freePokemons: freePokemons || null,
  capturedPokemons: capturedPokemons || null
});

export default connect(mapStateToProps)(PokemonPage);
