import actionTypes from './pokemons.action-types';

export const fetchFreePokemonsStart = () => ({
  type: actionTypes.FETCH_FREE_POKEMONS_START
});

export const fetchFreePokemonsSuccess = freePokemonsMap => ({
  type: actionTypes.FETCH_FREE_POKEMONS_SUCCESS,
  payload: freePokemonsMap
});

export const fetchFreePokemonsFailure = errorMessage => ({
  type: actionTypes.FETCH_FREE_POKEMONS_FAILURE,
  payload: errorMessage
});

export const fetchCapturedPokemonsStart = () => ({
  type: actionTypes.FETCH_CAPTURED_POKEMONS_START
});

export const fetchCapturedPokemonsSuccess = CapturedPokemonsMap => ({
  type: actionTypes.FETCH_CAPTURED_POKEMONS_SUCCESS,
  payload: CapturedPokemonsMap
});

export const fetchCapturedPokemonsFailure = errorMessage => ({
  type: actionTypes.FETCH_CAPTURED_POKEMONS_FAILURE,
  payload: errorMessage
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
