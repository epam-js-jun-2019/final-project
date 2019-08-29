import {LOADING_START,LOADING_SUCCESS,POKEMON_CATCH} from './consts'

const initialState = {
    page : 1,
    data : [],
    loading: false,
    error : false,
    catched : [],
  };

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOADING_START :
        return {
          ...state, loading : true
        } 
      case LOADING_SUCCESS:
          return{
            ...state, loading : false, data : [...state.data,...action.payload]
          }
      case POKEMON_CATCH:
          return{
              ...state, catched : [...state.catched,action.payload]
          }
      default:
        return state;
    }
  }
export default reducer  