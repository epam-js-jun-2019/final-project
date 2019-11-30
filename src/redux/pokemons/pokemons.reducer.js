import actionTypes from './pokemons.action-types';

const INITIAL_STATE = {
  freePokemons: [],
  capturedPokemons: [],
  currentPokemon: [],
  isLoading: false
};

const pokemonsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_POKEMON_DATA:
      return {
        ...state,
        isLoading: false,
        freePokemons: action.payload.freePokemons,
        capturedPokemons: action.payload.capturedPokemons
      };
    case actionTypes.GET_POKEMON_DATA_ASYNC:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.CATCH_POKEMON:
      return {
        ...state,
        freePokemons: state.freePokemons.filter(
          pokemon => pokemon.id !== action.payload.id
        ),
        capturedPokemons: [...state.capturedPokemons, action.payload]
      };
    case actionTypes.SET_POKEMON_FREE:
      return {
        ...state,
        capturedPokemons: state.capturedPokemons.filter(
          pokemon => pokemon.id !== action.payload.id
        ),
        freePokemons: [...state.freePokemons, action.payload]
      };
    case actionTypes.SET_CURRENT_POKEMON:
      return {
        ...state,
        currentPokemon: action.payload
      };
    default:
      return state;
  }
};

export default pokemonsReducer;
