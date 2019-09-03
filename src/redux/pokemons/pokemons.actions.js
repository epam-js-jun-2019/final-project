import PokemonsActionTypes from './pokemons.types';

export const getPokemonsAsync = () => ({
  type: PokemonsActionTypes.GET_POKEMON_DATA_ASYNC
});

export const getPokemons = payload => ({
  type: PokemonsActionTypes.GET_POKEMON_DATA,
  payload
});

export const catchPokemon = pokemon => ({
  type: PokemonsActionTypes.CATCH_POKEMON,
  payload: pokemon
});

export const setPokemonFree = pokemon => ({
  type: PokemonsActionTypes.SET_POKEMON_FREE,
  payload: pokemon
});

export const setCurrentPokemon = pokemon => ({
  type: PokemonsActionTypes.SET_CURRENT_POKEMON,
  payload: pokemon
});
