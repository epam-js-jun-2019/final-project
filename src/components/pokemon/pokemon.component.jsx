import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { APIcatchPokemon, APIsetPokemonFree } from 'FetchAPI/fetch.methods';
import { catchPokemon } from 'Redux/pokemons/pokemons.actions';
import { setPokemonFree } from 'Redux/pokemons/pokemons.actions';

import CustomButton from 'Components/custom-button/custom-button.component';

import './pokemon.styles.scss';

class Pokemon extends React.Component {
  render() {
    const {
      id,
      name,
      status,
      captureDate,
      catchPokemon,
      setPokemonFree
    } = this.props;
    return (
      <div className={`${status !== 'free' ? 'Pokemon_captured' : ''} Pokemon`}>
        <div
          className={`${
            status !== 'free' ? 'Pokemon_captured-alt' : ''
          } hidden-backgroud`}
        />
        <Link to={`pokemon/${id}`}>
          <img
            className='Pokemon__image'
            src={`./assets/images/pokemons-images/${id}.png`}
            alt='pokemon'
          />
        </Link>
        <div className='Pokemon__text'>
          <div className='Pokemon__name'>
            Name:{' '}
            <span className='Pokemon__text_focus'>
              {name.split('')[0].toUpperCase() + name.slice(1)}
            </span>
          </div>
          <div className='Pokemon__status'>
            Status: <span className='Pokemon__text_focus'>{status}</span>
          </div>
          {status !== 'free' ? (
            <div className='Pokemon__captureDate'>
              Capture Date:{' '}
              <span className='Pokemon__text_focus'>{captureDate}</span>
            </div>
          ) : null}
        </div>
        {status === 'free' ? (
          <CustomButton
            onClick={() => {
              catchPokemon({ id, name, status, captureDate });
              APIcatchPokemon({
                id,
                name,
                status: 'captured',
                captureDate: new Date()
                  .toDateString()
                  .split(' ')
                  .slice(1, 4)
                  .join(' ')
              });
            }}
          >
            Catch
          </CustomButton>
        ) : null}
        {status === 'captured' ? (
          <CustomButton
            onClick={() => {
              setPokemonFree({ id, name, status, captureDate });
              APIsetPokemonFree({
                id,
                name,
                status: 'free',
                captureDate: 'none'
              });
            }}
          >
            Set Free
          </CustomButton>
        ) : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  catchPokemon: pokemon => dispatch(catchPokemon(pokemon)),
  setPokemonFree: pokemon => dispatch(setPokemonFree(pokemon))
});

export default connect(
  null,
  mapDispatchToProps
)(Pokemon);
