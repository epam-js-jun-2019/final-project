import { LOADING_START, LOADING_SUCCESS, POKEMON_CATCH } from "./consts";

const initialState = {
  page: 1,
  data: [],
  loading: false,
  error: false,
  catched: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        loading: true
      };
    case LOADING_SUCCESS:
      return {
        ...state,
        loading: false,
        page : state.page + 1,
        data: [...state.data, ...action.payload]
      };
    case POKEMON_CATCH:
      const { payload } = action;
      const { data } = state;
      let idx = 0;
      while (data[idx].id !== payload) {
        idx++;
      }

      const element = data[idx];
      element.catched = true;
      element.catchTime = new Date()

      if (state.catched.indexOf(payload) === -1) {
        return {
          ...state,
          catched: [...state.catched, action.payload]
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};
export default reducer;
