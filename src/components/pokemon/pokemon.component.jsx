import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { capitalizeWord } from '../../utils/utilities';
import CustomButton from '../custom-button/custom-button.component';

import './pokemon.styles.scss';

const Pokemon = ({
  id,
  name,
  status,
  owner,
  captureDate,
  photoId,
  userData,
  setCurrentPokemon,
  catchPokemonAsync,
  setPokemonFreeAsync,
  getPokemonImgReference
}) => {
  const initialState = {
    imgUrl: null
  };
  const [state, setState] = useState(initialState);
  const { imgUrl } = state;

  const loadImageUrl = async photoId => {
    const imgUrl = await getPokemonImgReference(photoId);
    setState({ imgUrl });
    return imgUrl;
  };

  useEffect(() => {
    loadImageUrl(photoId);
    return () => null;
  }, [id]);

  const captureDateBlock = () => (
    <div className='Pokemon__captureDate'>
      Capture Date: <span className='Pokemon__text_focus'>{captureDate}</span>
    </div>
  );

  const renderActionButton = (pokemonStatus, isUserRegistered) => {
    if (pokemonStatus == 'free' && isUserRegistered) {
      return (
        <CustomButton
          onClick={() =>
            catchPokemonAsync({
              id,
              name,
              owner: userData.displayName,
              photoId,
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
    } else if (pokemonStatus == 'captured' && isUserRegistered) {
      return (
        <CustomButton
          onClick={() =>
            setPokemonFreeAsync({
              id,
              name,
              owner: 'none',
              photoId,
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
        onClick={() =>
          setCurrentPokemon({ id, photoId, name, status, captureDate })
        }
        to={pokemonPage}
      >
        <img className='Pokemon__image' src={imgUrl} alt='pokemon' />
      </Link>
      <div className='Pokemon__text'>
        <div className='Pokemon__id'>
          Owner: <span className='Pokemon__text_focus'>{owner}</span>
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
      {renderActionButton(status, userData)}
    </div>
  );
};

Pokemon.defaultProps = {
  owner: 'none'
};

Pokemon.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  captureDate: PropTypes.string.isRequired,
  setCurrentPokemon: PropTypes.func.isRequired,
  catchPokemonAsync: PropTypes.func.isRequired,
  setPokemonFreeAsync: PropTypes.func.isRequired
};

export default Pokemon;
