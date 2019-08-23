import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
      <div
        className={`${status !== 'free' ? 'captured' : ''} Pokemon__container`}
      >
        <div className={`${status !== 'free' ? 'captured2' : ''} second-bg`} />
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
            <span className='focus'>
              {name.split('')[0].toUpperCase() + name.slice(1)}
            </span>
          </div>
          <div className='Pokemon__status'>
            Status: <span className='focus'>{status}</span>
          </div>
          {status !== 'free' ? (
            <div className='Pokemon__captureDate'>
              Capture Date: <span className='focus'>{captureDate}</span>
            </div>
          ) : null}
        </div>
        {status === 'free' ? (
          <CustomButton onClick={() => catchPokemon(id)}>Catch</CustomButton>
        ) : null}
        {status === 'captured' ? (
          <CustomButton onClick={() => setPokemonFree(id)}>
            Set Free
          </CustomButton>
        ) : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  catchPokemon: id => dispatch(catchPokemon(id)),
  setPokemonFree: id => dispatch(setPokemonFree(id))
});

export default connect(
  null,
  mapDispatchToProps
)(Pokemon);
