import {combineReducers} from 'redux';
import { handleActions } from 'redux-actions';


import {reducer as pokemonsReduser} from './pokemons';
import {reducer as caughtReducer} from './caught';


export const rootReduser = combineReducers({
    pokemons: pokemonsReduser,
    caught: caughtReducer,
});
