import actionTypes from './pokemons.action-types';

export const getPokemonsAsync = () => ({
  type: actionTypes.GET_POKEMON_DATA_ASYNC
});

export const getPokemons = payload => ({
  type: actionTypes.GET_POKEMON_DATA,
  payload
});

export const catchPokemonAsync = pokemon => ({
  type: actionTypes.CATCH_POKEMON_ASYNC,
  payload: pokemon
});

export const catchPokemon = pokemon => ({
  type: actionTypes.CATCH_POKEMON,
  payload: pokemon
});

export const setPokemonFreeAsync = pokemon => ({
  type: actionTypes.SET_POKEMON_FREE_ASYNC,
  payload: pokemon
});

export const setPokemonFree = pokemon => ({
  type: actionTypes.SET_POKEMON_FREE,
  payload: pokemon
});

export const setCurrentPokemon = pokemon => ({
  type: actionTypes.SET_CURRENT_POKEMON,
  payload: pokemon
});
