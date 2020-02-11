import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { capitalizeWord } from '../../utils/utilities';
import './pokemon-page.styles.scss';

const PokemonPage = ({ currentPokemon }) => {
  const initialState = {
    imgUrl: null,
    owner: 'none',
    name: 'none',
    status: 'none',
    captureDate: 'none'
  };

  const [state, setState] = useState(initialState);
  const { imgUrl, owner, name, status, captureDate } = state;

  useEffect(() => {
    const { imgUrl, owner, name, status, captureDate } = currentPokemon;
    setState({ ...state, imgUrl, owner, name, status, captureDate });
    return () => null;
  }, [currentPokemon.photoId]);

  return (
    <div style={{ position: 'relative' }}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imgUrl})`
        }}
      />
      <div className='pokemon-info'>
        <h1 className='pokemon-title'>{name && capitalizeWord(name)}</h1>
        <img className='pokemon-image' src={imgUrl} alt='pokemon' />
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
