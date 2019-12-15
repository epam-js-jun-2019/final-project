import actionTypes from './pokemons.action-types';

const INITIAL_STATE = {
  freePokemons: [],
  capturedPokemons: [],
  currentPokemon: {},
  randomPokemon: {},
  isFetching: false,
  errorMessage: null
};

const pokemonsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FREE_POKEMONS_START:
    case actionTypes.FETCH_CAPTURED_POKEMONS_START:
      return {
        ...state,
        isFetching: true
      };
    case actionTypes.FETCH_FREE_POKEMONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        freePokemons: action.payload.sort((a, b) => a.photoId - b.photoId),
        errorMessage: null
      };
    case actionTypes.FETCH_CAPTURED_POKEMONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        capturedPokemons: action.payload.sort((a, b) => a.photoId - b.photoId),
        errorMessage: null
      };
    case actionTypes.FETCH_FREE_POKEMONS_FAILURE:
    case actionTypes.FETCH_CAPTURED_POKEMONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    case actionTypes.FETCH_RANDOM_POKEMON_ASYNC:
      return {
        ...state,
        isFetching: true
      };
    case actionTypes.FETCH_RANDOM_POKEMON:
      return {
        ...state,
        isFetching: false,
        randomPokemon: action.payload
      };
    case actionTypes.CATCH_POKEMON:
      return {
        ...state,
        freePokemons: state.freePokemons.filter(
          pokemon => pokemon.name !== action.payload.name
        ),
        capturedPokemons: [...state.capturedPokemons, action.payload].sort(
          (a, b) => a.id - b.id
        )
      };
    case actionTypes.SET_POKEMON_FREE:
      return {
        ...state,
        capturedPokemons: state.capturedPokemons.filter(
          pokemon => pokemon.name !== action.payload.name
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
