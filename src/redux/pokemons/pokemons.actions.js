import PokemonsActionTypes from './pokemons.types';

export const onGetPokemons = () => ({
  type: PokemonsActionTypes.GET_POKEMON_DATA_ASYNC
});

export const getPokemons = payload => ({
  type: PokemonsActionTypes.GET_POKEMON_DATA,
  payload
});

export const catchPokemon = id => ({
  type: PokemonsActionTypes.CATCH_POKEMON,
  payload: id
});

export const setPokemonFree = id => ({
  type: PokemonsActionTypes.SET_POKEMON_FREE,
  payload: id
});
