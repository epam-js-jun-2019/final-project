import PokemonsActionTypes from './pokemons.types';

const INITIAL_STATE = {
  freePokemons: null,
  capturedPokemons: null,
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
        capturedPokemons: [
          ...state.capturedPokemons.slice(
            0,
            action.payload.id === 0 ? null : action.payload.id - 1
          ),
          {
            ...action.payload,
            status: 'captured',
            captureDate: new Date()
              .toDateString()
              .split(' ')
              .slice(1, 4)
              .join(' ')
          },
          ...state.capturedPokemons.slice(action.payload.id - 1)
        ]
      };
    case PokemonsActionTypes.SET_POKEMON_FREE:
      return {
        ...state,
        capturedPokemons: state.capturedPokemons.filter(
          pokemon => pokemon.id !== action.payload.id
        ),
        freePokemons: [
          ...state.freePokemons.slice(
            0,
            action.payload.id === 0 ? null : action.payload.id - 1
          ),
          {
            ...action.payload,
            status: 'free',
            captureDate: 'none'
          },
          ...state.freePokemons.slice(action.payload.id - 1)
        ]
      };
    default:
      return state;
  }
};

export default pokemonsReducer;
