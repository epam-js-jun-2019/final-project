import React from 'react';
import PropTypes from 'prop-types';

import './pokemon-page.styles.scss';

const PokemonPage = ({ currentPokemon: { id, name, status, captureDate } }) => {
  const capitalizeWord = word => {
    const newWord = word.split('')[0].toUpperCase() + word.slice(1);
    return newWord;
  };

  return (
    <div style={{ position: 'relative' }}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(../../assets/images/pokemons-images/${id}.png)`
        }}
      />
      <div className='pokemon-info'>
        <h1 className='pokemon-title'>{capitalizeWord(name)}</h1>
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
        {captureDate !== 'none' && (
          <span>
            Capture Date:{' '}
            <span className='pokemon-info_focus'>{captureDate}</span>
          </span>
        )}
      </div>
    </div>
  );
};

PokemonPage.propTypes = {
  currentPokemon: PropTypes.object.isRequired
};

export default PokemonPage;
