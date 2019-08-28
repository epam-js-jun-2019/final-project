const initialState = {
    page : 1,
    data : [],
    loading: false,
    error : false,
  };

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOADING_START' :
        return {
          ...state, loading : true
        } 
      case 'LOADING_SUCCESS':
          return{
            ...state, loading : false, data : [...state.data,...action.payload]
          }
      default:
        return state;
    }
  }
export default reducer  