import { CATCH_POKEMON, FETCH_POKEMONS, SWITCH_PAGE_CATCHED } from '../actions/actionTypes';

const initState = {
  catchedPokemons: [],
  page: 1,
  itemsPerPage: 12,
};

const catched = (state = initState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS.SUCCESS: {
      const { payload: { catchedPokemons } } = action;
      return {
        ...state,
        catchedPokemons,
      };
    }
    case CATCH_POKEMON.SUCCESS: {
      const { payload: { id, date } } = action;
      return {
        ...state,
        catchedPokemons: [...state.catchedPokemons, { id, date }],
      };
    }
    case SWITCH_PAGE_CATCHED: {
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

export default catched;
