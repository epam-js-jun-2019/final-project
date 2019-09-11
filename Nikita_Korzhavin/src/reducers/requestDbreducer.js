import {
  REQUEST_POKEMONS_FAIL,
  REQUEST_POKEMONS, RECEIVE_POKEMONS
} from '../actions/requestDbActions.js';
import { SET_POKEMON_STATE }  from '../actions/setPokemonState';
import newDate from '../utils/newDate';

const getPokemons = ( state = {}, action ) => {
  switch (action.type) {
    case REQUEST_POKEMONS_FAIL:   
      return {...state, isFetching: false, isFailed: true, error: action.error};
    case REQUEST_POKEMONS:
      return {...state, isFetching: true, isFailed: false};
    case RECEIVE_POKEMONS: 
      return {...state, isFetching: false, isFailed: false, items: {
        ...state.items, ...action.pokemons.reduce((acc, item) => {
          return { ...acc, [item.id]: {...item, catched: false, catchDate: ""} }
        }, {})
      }};
    default:
      return state;    
  }
} 



export default (state = {
  isFetching: false,
  isFailed: false,
  items: {}
}, action ) => {
  switch (action.type) {
    case SET_POKEMON_STATE:
      return {
        ...state,
        items: {
          ...state.items,
          [action.id]: {
            ...state.items[action.id],
            catched: true,
            catchDate: newDate()
          }
        }
      };
    case REQUEST_POKEMONS_FAIL:
    case REQUEST_POKEMONS:
    case RECEIVE_POKEMONS: 
      return {...state, ...getPokemons(state, action)};
    default:
      return state;    
  }
}