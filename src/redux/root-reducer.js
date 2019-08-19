import { combineReducers } from 'redux';

import pokemonsReducer from './pokemons/pokemons.reducer';

export default combineReducers({
  pokemons: pokemonsReducer
});
