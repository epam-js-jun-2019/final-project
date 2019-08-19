import PokemonsActionTypes from './pokemons.types';

export const setPokemonStatus = pokemon => ({
  type: PokemonsActionTypes.SET_POKEMON_STATUS,
  payload: pokemon
});
