import axios from 'axios';
import { PAGE_LIMIT }  from '../constants/pageLimit';

export const SET_PAGE  = 'SET_PAGE';
export const SET_LAST_PAGE  = 'SET_PAGELIMIT';
export const SET_PAGE_IDS = 'SET_PAGE_IDS';

export const setPage = (page = 1, pageType = 'pokemons') => ({ type: SET_PAGE, page, pageType });

export const setLastPage = (lastPage, pageType = 'pokemons') => ({ type: SET_LAST_PAGE, lastPage: Math.ceil(lastPage / PAGE_LIMIT), pageType });

export const setPageIds = (pokemons, pageNum, pageType = 'pokemons') => ({
  type: SET_PAGE_IDS, 
  pageIds: pokemons.reduce((acc, pok) => [...acc, pok.id], []),
  pageType, 
  pageNum
})

export const fetchPokemonsLength = () => dispatch => {
  return axios.get(`http://localhost:3004/pokemons?_page=1&_limit=1`)
    .then(response => {
      dispatch(setLastPage(+response.headers['x-total-count'], "pokemons"))
    })
}