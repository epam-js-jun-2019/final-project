import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../../components/custom-button/custom-button.component';

import './pokemon-page.styles.scss';

const PokemonPage = ({ pokemons, location }) => {
  const pokemonID = +location.pathname.split('/pokemon/')[1];
  const currentPokemon = pokemons.filter(
    pokemon => pokemon.id === pokemonID
  )[0];
  const { id, name, status, captureDate } = currentPokemon;
  return (
    <div>
      <img
        className='bg-image'
        src={`../../assets/images/pokemons-images/${id}.png`}
        alt='pokemon'
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
        <span>
          Capture Date: <span className='focus'>{captureDate}</span>
        </span>
        <CustomButton className='button'>Catch</CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = ({ pokemons: { pokemons } }) => ({
  pokemons
});

export default connect(mapStateToProps)(PokemonPage);
