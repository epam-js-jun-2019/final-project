import { handleActions } from 'redux-actions';
import { fetchPokemonsSuccess } from '../actions/fetchPokemons';
import { catchPokemonSuccess } from '../actions/catchPokemon';
import { switchPageCatched } from '../actions/pagination';

const initState = {
  catchedPokemons: [],
  page: 1,
  itemsPerPage: 12,
};

const catched = handleActions({
  [fetchPokemonsSuccess](state, { payload: { catchedPokemons } }) {
    return {
      ...state,
      catchedPokemons,
    };
  },
  [catchPokemonSuccess](state, { payload: { id, date } }) {
    return {
      ...state,
      catchedPokemons: [...state.catchedPokemons, { id, date }],
    };
  },
  [switchPageCatched](state, { payload: { page } }) {
    return {
      ...state,
      page,
    };
  },
}, initState);

export default catched;
