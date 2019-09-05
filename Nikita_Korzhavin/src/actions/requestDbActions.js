import axios from 'axios';
import { PAGE_LIMIT }  from '../constants/pageLimit';


export const REQUEST_POKEMONS_FAIL  = 'REQUEST_POKEMONS_FAIL';
export const REQUEST_POKEMONS = 'REQUEST_POKEMONS';
export const RECEIVE_POKEMONS = 'RECEIVE_POKEMONS';




const requestPokemons = () => ({ type: REQUEST_POKEMONS });
const requestPokemonssFail = (err) => ({ type: REQUEST_POKEMONS_FAIL, error: err });
const receivePokemons = ( json, pageNum, pageType ) => ({
  type: RECEIVE_POKEMONS,
  pokemons: json,
  pageIds: json.reduce((acc, pok) => [...acc, pok.id], []),
  pageType, 
  pageNum,
  recieved: Date.now()
});

const fetchPokemons = (page, limit ) => dispatch => {
    dispatch(requestPokemons());
    return axios.get(`http://localhost:3004/pokemons?_page=${ page }&_limit=${ limit }`)
      .then(response => {
        return response.data;
      })
      .then(json => {
        dispatch(receivePokemons(json, page, 'pokemons'));
      })
      .catch(err => dispatch(requestPokemonssFail(err)))
  }


const shouldFetchPokemons = (state) => {
  if ( state.fetchedPokemons.isFetching ) {
    return false;
  } 
  return true;
}

const ifPageInStore = (state, page, pageType) => {
  return state.pagination[pageType].pageIds[page]
}

export const fetchPokemonsIfNeeded = ( page = 1, pageType="pokemons", limit = PAGE_LIMIT ) => (dispatch, getState) => {
  const state = getState();
  if (shouldFetchPokemons(state) && !ifPageInStore(state, page, pageType) && ( pageType === "pokemons" )) {
    return dispatch(fetchPokemons(page, limit))
  }
}


export const checkIfPageInStore = (page, pageType) => (dispatch, getState) => {
  if (!ifPageInStore(getState(), page, pageType)){
    fetchPokemonsIfNeeded(page)
  }
}



    
  

