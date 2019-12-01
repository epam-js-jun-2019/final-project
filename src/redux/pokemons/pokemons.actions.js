import actionTypes from './pokemons.action-types';

export const getPokemonsAsync = () => ({
  type: actionTypes.GET_POKEMON_DATA_ASYNC
});

export const getPokemons = payload => ({
  type: actionTypes.GET_POKEMON_DATA,
  payload
});

export const getFreePokemonsAsync = () => ({
  type: actionTypes.GET_FREE_POKEMONS_ASYNC
});

export const getFreePokemons = payload => ({
  type: actionTypes.GET_FREE_POKEMONS,
  payload
});

export const getCapturedPokemonsAsync = () => ({
  type: actionTypes.GET_CAPTURED_POKEMONS_ASYNC
});

export const getCapturedPokemons = payload => ({
  type: actionTypes.GET_CAPTURED_POKEMONS,
  payload
});

export const getRandomPokemonAsync = () => ({
  type: actionTypes.GET_RANDOM_POKEMON_ASYNC
});

export const getRandomPokemon = payload => ({
  type: actionTypes.GET_RANDOM_POKEMON,
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
