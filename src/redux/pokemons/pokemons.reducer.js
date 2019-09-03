import PokemonsActionTypes from './pokemons.types';

const INITIAL_STATE = {
  freePokemons: null,
  capturedPokemons: null,
  currentPokemon: null,
  loading: false
};

const pokemonsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PokemonsActionTypes.GET_POKEMON_DATA:
      return {
        ...state,
        loading: false,
        freePokemons: action.payload.freePokemons,
        capturedPokemons: action.payload.capturedPokemons
      };
    case PokemonsActionTypes.GET_POKEMON_DATA_ASYNC:
      return {
        ...state,
        loading: true
      };
    case PokemonsActionTypes.CATCH_POKEMON:
      return {
        ...state,
        freePokemons: state.freePokemons.filter(
          pokemon => pokemon.id !== action.payload.id
        ),
        capturedPokemons: [...state.capturedPokemons, action.payload]
      };
    case PokemonsActionTypes.SET_POKEMON_FREE:
      return {
        ...state,
        capturedPokemons: state.capturedPokemons.filter(
          pokemon => pokemon.id !== action.payload.id
        ),
        freePokemons: [...state.freePokemons, action.payload]
      };
    case PokemonsActionTypes.SET_CURRENT_POKEMON:
      return {
        ...state,
        currentPokemon: action.payload
      };
    default:
      return state;
  }
};

export default pokemonsReducer;
