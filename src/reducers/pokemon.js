import { FETCH_POKEMON } from '../actions/actionTypes';

const initState = {
  data: {},
  catched: {},
  isLoading: false,
  isFailed: false,
}

const pokemon = (state = initState, action) => {
  switch (action.type) {
    case FETCH_POKEMON.REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_POKEMON.SUCCESS: {
      const { payload: { data, catched } } = action;
      return {
        ...state,
        data,
        catched,
        isLoading: false,
      };
    }
    case FETCH_POKEMON.FAILURE: {
      return {
        ...state,
        isFailed: true,
      }
    }
    default:
      return state;
  }
}

export default pokemon;