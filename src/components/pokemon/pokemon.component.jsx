import React from 'react';
import { Link } from 'react-router-dom';
import apiRequests from 'FetchAPI/http.lib';
import restApiLinks from 'FetchAPI/restful-api.links';

import CustomButton from 'Components/custom-button/custom-button.component';

import './pokemon.styles.scss';

class Pokemon extends React.Component {
  capitalizeWord = word => {
    const newWord = word.split('')[0].toUpperCase() + word.slice(1);
    return newWord;
  };

  catchHandler = async pokemon => {
    const backRequest = await apiRequests.post(
      restApiLinks.capturedPokemons,
      pokemon
    );
    const { data, response } = await backRequest;
    if (response.ok) {
      await apiRequests.delete(`${restApiLinks.freePokemons}/${pokemon.id}`);
      this.props.catchPokemon(data);
    }
  };

  rescueHandler = async pokemon => {
    const backRequest = await apiRequests.post(
      restApiLinks.freePokemons,
      pokemon
    );
    const { data, response } = await backRequest;
    if (response.ok) {
      await apiRequests.delete(
        `${restApiLinks.capturedPokemons}/${pokemon.id}`
      );
      this.props.setPokemonFree(data);
    }
  };

  render() {
    const { id, name, status, captureDate, setCurrentPokemon } = this.props;

    const captureDateBlock =
      status !== 'free' ? (
        <div className='Pokemon__captureDate'>
          Capture Date:{' '}
          <span className='Pokemon__text_focus'>{captureDate}</span>
        </div>
      ) : null;

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
            <span className='Pokemon__text_focus'>
              {this.capitalizeWord(name)}
            </span>
          </div>
          <div className='Pokemon__status'>
            Status: <span className='Pokemon__text_focus'>{status}</span>
          </div>
          {captureDateBlock}
        </div>
        {status === 'free' ? (
          <CustomButton
            onClick={() =>
              this.catchHandler({
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
        ) : null}
        {status === 'captured' ? (
          <CustomButton
            onClick={() =>
              this.rescueHandler({
                id,
                name,
                status: 'free',
                captureDate: 'none'
              })
            }
          >
            Set Free
          </CustomButton>
        ) : null}
      </div>
    );
  }
}

export default Pokemon;
