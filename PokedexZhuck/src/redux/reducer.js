import * as actionTypes from "./constants";
import * as actions from "./actions";

const initialState = {
  page: 1,
  caughtPage: 1,
  isLoading: false,
  isCatching: false,
  error: null,
  pokemons: [],
  caughtPokemons: [],
  loadedAllPokemons: false,
  loadedAllCaughtPokemons: false,
  currentPokemonInfo: null
};

const pokemonApp = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POKEMONS_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case actionTypes.GET_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemons: state.pokemons.concat(action.payload),
        isLoading: false,
        page: state.page + 1
      };

    case actionTypes.GET_POKEMONS_FAIL:
      return actions.getPokemonsFail;

    case actionTypes.ARE_ALL_POKEMONS_LOADED:
      return {
        ...state,
        loadedAllPokemons: true
      };

    case actionTypes.CATCH_POKEMON_START:
      return {
        ...state,
        isCatching: true,
        error: null
      };

    case actionTypes.CATCH_POKEMON_SUCCESS:
      const newPoks = [];
      state.pokemons.forEach(pokemon => {
        let newPokemon = {};
        if (pokemon.id === action.payload.id) {
          newPokemon = {
            id: action.payload.id,
            name: action.payload.name,
            caught: true
          };
        } else {
          newPokemon = Object.assign({}, pokemon);
        }
        newPoks.push(newPokemon);
      });
      return {
        ...state,
        isCatching: false,
        pokemons: newPoks,
        currentPokemonInfo: state.currentPokemonInfo
          ? { ...state.currentPokemonInfo, caught: true }
          : null
      };

    case actionTypes.CATCH_POKEMON_FAIL:
      return actions.catchPokemonFail;

    case actionTypes.GET_CAUGHT_POKEMONS_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case actionTypes.GET_CAUGHT_POKEMONS_SUCCESS:
      return {
        ...state,
        caughtPokemons: state.caughtPokemons.concat(action.payload),
        isLoading: false,
        caughtPage: state.caughtPage + 1
      };

    case actionTypes.GET_CAUGHT_POKEMONS_FAIL:
      return actions.getCaughtPokemonsFail;

    case actionTypes.ARE_ALL_CAUGHT_POKEMONS_LOADED:
      return {
        ...state,
        loadedAllCaughtPokemons: true
      };

    case actionTypes.GET_POKEMON_INFO_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case actionTypes.GET_POKEMON_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentPokemonInfo: action.payload
      };

    case actionTypes.GET_POKEMON_INFO_FAIL:
      return actions.getPokemonInfoFail;

    default:
      return state;
  }
};

export default pokemonApp;
