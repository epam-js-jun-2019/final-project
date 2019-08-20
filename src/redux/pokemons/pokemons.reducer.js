import PokemonsActionTypes from './pokemons.types';

import * as data from '../../../db.json';

const INITIAL_STATE = {
  pokemons: data.pokemons
};

const pokemonsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PokemonsActionTypes.SET_POKEMON_STATUS:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default pokemonsReducer;
