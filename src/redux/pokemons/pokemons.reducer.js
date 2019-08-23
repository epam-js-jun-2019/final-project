import PokemonsActionTypes from './pokemons.types';
import {
  catchPokemonFunc,
  setPokemonFreeFunc
} from '../../fetchapi/fetch.methods';

const INITIAL_STATE = {
  freePokemons: null,
  capturedPokemons: null
};

const pokemonsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PokemonsActionTypes.GET_POKEMON_DATA:
      return {
        ...state,
        freePokemons: action.payload.freePokemons,
        capturedPokemons: action.payload.capturedPokemons
      };
    case PokemonsActionTypes.GET_POKEMON_DATA_ASYNC:
      return {
        ...state
      };
    case PokemonsActionTypes.CATCH_POKEMON:
      catchPokemonFunc({
        ...action.payload,
        status: 'captured',
        captureDate: new Date()
          .toDateString()
          .split(' ')
          .slice(1, 4)
          .join(' ')
      });
      return {
        ...state,
        freePokemons: state.freePokemons.filter(
          pokemon => pokemon.id !== action.payload.id
        ),
        capturedPokemons: [
          {
            ...action.payload,
            status: 'captured',
            captureDate: new Date()
              .toDateString()
              .split(' ')
              .slice(1, 4)
              .join(' ')
          },
          ...state.capturedPokemons
        ]
      };
    case PokemonsActionTypes.SET_POKEMON_FREE:
      setPokemonFreeFunc({
        ...action.payload,
        status: 'free',
        captureDate: 'none'
      });
      return {
        ...state,
        capturedPokemons: state.capturedPokemons.filter(
          pokemon => pokemon.id !== action.payload.id
        ),
        freePokemons: [
          {
            ...action.payload,
            status: 'free',
            captureDate: 'none'
          },
          ...state.freePokemons
        ]
      };
    default:
      return state;
  }
};

export default pokemonsReducer;
