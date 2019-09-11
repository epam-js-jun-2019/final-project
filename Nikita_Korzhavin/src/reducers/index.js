import { combineReducers } from 'redux';
import fetchedPokemons from './requestDbreducer';
import { pagination } from './pagination';



const mainReducer = combineReducers({ pagination , fetchedPokemons })
export default mainReducer;