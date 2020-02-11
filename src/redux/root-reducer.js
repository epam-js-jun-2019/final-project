import { combineReducers } from 'redux';

import pokemonsReducer from './pokemons/pokemons.reducer';
import userReducer from './user/user.reducer';

export default combineReducers({
  pokemons: pokemonsReducer,
  user: userReducer
});
