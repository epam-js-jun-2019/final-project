import { handleActions } from 'redux-actions';
import { fetchPokemonsRequest, fetchPokemonsSuccess, fetchPokemonsFailure } from '../actions/fetchPokemons';
import { switchPagePokemons } from '../actions/pagination';

const initState = {
  pokemons: [],
  isLoading: true,
  isFailed: false,
  page: 1,
  itemsPerPage: 24,
};

const pokemons = handleActions({
  [fetchPokemonsRequest](state) {
    return { ...state };
  },
  [fetchPokemonsSuccess](state, { payload: { allPokemons } }) {
    return {
      ...state,
      pokemons: allPokemons,
      isLoading: false,
    };
  },
  [fetchPokemonsFailure](state) {
    return {
      ...state,
      isLoading: false,
      isFailed: true,
    };
  },
  [switchPagePokemons](state, { payload: { page } }) {
    return {
      ...state,
      page,
    };
  },
}, initState);

export default pokemons;
