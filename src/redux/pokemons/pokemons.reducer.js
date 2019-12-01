import actionTypes from './pokemons.action-types';

const INITIAL_STATE = {
  freePokemons: [],
  capturedPokemons: [],
  currentPokemon: [],
  randomPokemon: {},
  isLoading: false
};

const pokemonsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_FREE_POKEMONS_ASYNC:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.GET_FREE_POKEMONS:
      return {
        ...state,
        isLoading: false,
        freePokemons: action.payload.sort((a, b) => a.id - b.id)
      };
    case actionTypes.GET_CAPTURED_POKEMONS_ASYNC:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.GET_CAPTURED_POKEMONS:
      return {
        ...state,
        isLoading: false,
        capturedPokemons: action.payload.sort((a, b) => a.id - b.id)
      };
    case actionTypes.GET_RANDOM_POKEMON_ASYNC:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.GET_RANDOM_POKEMON:
      return {
        ...state,
        isLoading: false,
        randomPokemon: action.payload
      };
    case actionTypes.CATCH_POKEMON:
      return {
        ...state,
        freePokemons: state.freePokemons.filter(
          pokemon => pokemon.id !== action.payload.id
        ),
        capturedPokemons: [...state.capturedPokemons, action.payload].sort(
          (a, b) => a.id - b.id
        )
      };
    case actionTypes.SET_POKEMON_FREE:
      return {
        ...state,
        capturedPokemons: state.capturedPokemons.filter(
          pokemon => pokemon.id !== action.payload.id
        ),
        freePokemons: [...state.freePokemons, action.payload].sort(
          (a, b) => a.id - b.id
        )
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
