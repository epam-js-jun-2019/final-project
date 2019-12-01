import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { capitalizeWord } from '../../utils/utilities';
import CustomButton from '../custom-button/custom-button.component';

import './pokemon.styles.scss';

const Pokemon = ({
  id,
  name,
  status,
  captureDate,
  setCurrentPokemon,
  catchPokemonAsync,
  setPokemonFreeAsync
}) => {
  const captureDateBlock = () => (
    <div className='Pokemon__captureDate'>
      Capture Date: <span className='Pokemon__text_focus'>{captureDate}</span>
    </div>
  );

  const renderActionButton = pokemonStatus => {
    if (pokemonStatus == 'free') {
      return (
        <CustomButton
          onClick={() =>
            catchPokemonAsync({
              id,
              name,
              status: 'captured',
              captureDate: new Date()
                .toDateString()
                .split(' ')
                .slice(1, 4)
                .join(' ')
            })
          }
        >
          Catch
        </CustomButton>
      );
    } else if (pokemonStatus == 'captured') {
      return (
        <CustomButton
          onClick={() =>
            setPokemonFreeAsync({
              id,
              name,
              status: 'free',
              captureDate: 'none'
            })
          }
        >
          Set Free
        </CustomButton>
      );
    }
  };

  const pokemonPage = `pokemon/${id}`;

  const pokemonMainContainerClasses = `${
    status !== 'free' ? 'Pokemon_captured' : 'Pokemon_captured-alt'
  } Pokemon`;

  const hiddenBackgroundClasses = `${
    status !== 'free' ? 'hidden-background_alt' : 'hidden-background'
  }`;

  return (
    <div className={pokemonMainContainerClasses}>
      <div className={hiddenBackgroundClasses} />
      <Link
        onClick={() => setCurrentPokemon({ id, name, status, captureDate })}
        to={pokemonPage}
      >
        <img
          className='Pokemon__image'
          src={`../../assets/images/pokemons-images/${id}.png`}
          alt='pokemon'
        />
      </Link>
      <div className='Pokemon__text'>
        <div className='Pokemon__id'>
          ID: <span className='Pokemon__text_focus'>{id}</span>
        </div>
        <div className='Pokemon__name'>
          Name:{' '}
          <span className='Pokemon__text_focus'>{capitalizeWord(name)}</span>
        </div>
        <div className='Pokemon__status'>
          Status: <span className='Pokemon__text_focus'>{status}</span>
        </div>
        {status !== 'free' && captureDateBlock()}
      </div>
      {renderActionButton(status)}
    </div>
  );
};

Pokemon.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  captureDate: PropTypes.string.isRequired,
  setCurrentPokemon: PropTypes.func.isRequired,
  catchPokemonAsync: PropTypes.func.isRequired,
  setPokemonFreeAsync: PropTypes.func.isRequired
};

export default Pokemon;
