import { combineReducers } from 'redux';
import pokemons from './pokemons';
import pokemon from './pokemon';
import catched from './catched';

export default combineReducers({
  pokemons,
  catched,
  pokemon,
});