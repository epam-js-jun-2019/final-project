import React from 'react';
import PropTypes from 'prop-types';

import { capitalizeWord } from '../../utils/utilities';
import './pokemon-page.styles.scss';

const PokemonPage = ({
  currentPokemon: { id, photoId, owner, name, status, captureDate }
}) => {
  return (
    <div style={{ position: 'relative' }}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(../../assets/images/pokemons-images/${photoId}.png)`
        }}
      />
      <div className='pokemon-info'>
        <h1 className='pokemon-title'>{capitalizeWord(name)}</h1>
        <img
          className='pokemon-image'
          src={`../../assets/images/pokemons-images/${photoId}.png`}
          alt='pokemon'
        />
        <span>
          Owner: <span className='pokemon-info_focus'>{owner || 'none'}</span>
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
