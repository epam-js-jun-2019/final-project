import React from 'react';
import { connect } from 'react-redux';

import './pokemon-page.styles.scss';

class PokemonPage extends React.Component {
  render() {
    const { freePokemons, capturedPokemons, location } = this.props;
    const pokemonID = +location.pathname.split('/pokemon/')[1];
    let currentPokemon =
      freePokemons.filter(pokemon => pokemon.id === pokemonID)[0] ||
      capturedPokemons.filter(pokemon => pokemon.id === pokemonID)[0];
    const { id, name, status, captureDate } = currentPokemon;
    return (
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundImage: `url(../../assets/images/pokemons-images/${id}.png)`,
            backgroundSize: '80%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '20% 75%',
            opacity: '0.075'
          }}
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
          {captureDate !== 'none' ? (
            <span>
              Capture Date: <span className='focus'>{captureDate}</span>
            </span>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ pokemons: { freePokemons, capturedPokemons } }) => ({
  freePokemons: freePokemons ? freePokemons : null,
  capturedPokemons: capturedPokemons ? capturedPokemons : null
});

export default connect(mapStateToProps)(PokemonPage);
