import PokemonsActionTypes from './pokemons.types';

export const catchPokemon = id => ({
  type: PokemonsActionTypes.CATCH_POKEMON,
  payload: id
});

export const setPokemonFree = id => ({
  type: PokemonsActionTypes.SET_POKEMON_FREE,
  payload: id
});
