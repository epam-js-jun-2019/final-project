import PokemonsActionTypes from './pokemons.types';

import * as data from '../../../db1.json';

const collection = data.pokemons;

const INITIAL_STATE = {
  pokemons: collection
};

const catchPokemonFunc = (state, payload) =>
  state.pokemons.forEach(pokemon =>
    pokemon.id === payload
      ? ((pokemon.status = 'captured'),
        (pokemon.captureDate = new Date()
          .toDateString()
          .split(' ')
          .slice(1, 4)
          .join(' ')))
      : pokemon
  );

const setPokemonFreeFunc = (state, payload) =>
  state.pokemons.forEach(pokemon =>
    pokemon.id === payload
      ? ((pokemon.status = 'free'), (pokemon.captureDate = 'none'))
      : pokemon
  );

const pokemonsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PokemonsActionTypes.CATCH_POKEMON:
      catchPokemonFunc(state, action.payload);
      return {
        ...state
      };
    case PokemonsActionTypes.SET_POKEMON_FREE:
      setPokemonFreeFunc(state, action.payload);
      return {
        ...state
      };
    default:
      return state;
  }
};

export default pokemonsReducer;
