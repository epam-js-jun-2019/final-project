import { SET_PAGE, SET_LAST_PAGE } from '../actions/pagination.js';
import { RECEIVE_POKEMONS } from '../actions/requestDbActions.js';
import { SET_POKEMON_STATE } from '../actions/setPokemonState.js';
import { PAGE_LIMIT } from '../constants/pageLimit';



const calculatePageIds = ( pageIds, lastPage, id ) => {
  if (pageIds[lastPage].length === PAGE_LIMIT) {
    pageIds[ lastPage + 1 ] = [ id ]
    lastPage = lastPage + 1 
  } else {
    pageIds[lastPage].push(id)
  }
  return {
    pageIds,
    lastPage
  }
}

export const pagination = (state = { 
    pokemons: {
      currentPage: 1,
      lastPage: 0,
      pageIds: {}
    },
    catchedPokemons: {
      currentPage: 1,
      lastPage: 1,
      pageIds: {
        1: []
      }
    }
}, 
  action ) => {
  switch (action.type) {
    case SET_POKEMON_STATE: 
      return {
        ...state,
        catchedPokemons: {
          ...state.catchedPokemons,
          ...calculatePageIds(state.catchedPokemons.pageIds, state.catchedPokemons.lastPage, action.id)
        }
      }
    case SET_PAGE:
      return { ...state, 
        [action.pageType]: {
          ...state[action.pageType], 
          currentPage: action.page
      }  
    };
    case SET_LAST_PAGE:
      return { ...state, 
        [action.pageType]: {
          ...state[action.pageType], 
          lastPage: action.lastPage
      }
    };
    case RECEIVE_POKEMONS: 
      return { ...state, 
        [action.pageType]: {
          ...state[action.pageType], 
          pageIds: { ...state[action.pageType].pageIds, [action.pageNum]: action.pageIds }, 
      }
    }
    default:
      return state;    
  }
}