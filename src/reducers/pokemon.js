import { handleActions } from 'redux-actions';
import { fetchPokemonRequest, fetchPokemonSuccess, fetchPokemonFailure } from '../actions/fetchPokemon';

const initState = {
  data: {},
  catched: {},
  isLoading: false,
  isFailed: false,
};

const pokemon = handleActions({
  [fetchPokemonRequest](state) {
    return {
      ...state,
      isLoading: true,
    };
  },
  [fetchPokemonSuccess](state, { payload: { data, catched } }) {
    return {
      ...state,
      data,
      catched,
      isLoading: false,
    };
  },
  [fetchPokemonFailure](state) {
    return {
      ...state,
      isFailed: true,
    };
  },
}, initState);

export default pokemon;
