import { FETCH_POKEMONS, SWITCH_PAGE_POKEMONS } from '../actions/actionTypes';

const initState = {
  pokemons: [],
  isLoading: true,
  isFailed: false,
  page: 1,
  itemsPerPage: 24,
};

const pokemons = (state = initState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS.REQUEST: {
      return {
        ...state,
      };
    }
    case FETCH_POKEMONS.SUCCESS: {
      const { payload: { allPokemons } } = action;
      return {
        ...state,
        pokemons: allPokemons,
        isLoading: false,
      };
    }
    case FETCH_POKEMONS.FAILURE: {
      return {
        ...state,
        isLoading: false,
        isFailed: true,
      };
    }
    case SWITCH_PAGE_POKEMONS: {
      const { payload: { page } } = action;
      return {
        ...state,
        page,
      };
    }
    default:
      return state;
  }
};

export default pokemons;
