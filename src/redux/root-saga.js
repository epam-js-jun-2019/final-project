import { all } from 'redux-saga/effects';
import {
  watchGetFreePokemonsAsync,
  watchGetCapturedPokemonsAsync,
  watchGetPokemonDataAsync,
  watchCatchPokemonAsync,
  watchSetPokemonFreeAsync,
  watchGetRandomPokemonAsync
} from './pokemons/pokemons.sagas';

export default function* rootSaga() {
  yield all([
    watchGetFreePokemonsAsync(),
    watchGetCapturedPokemonsAsync(),
    watchGetPokemonDataAsync(),
    watchCatchPokemonAsync(),
    watchSetPokemonFreeAsync(),
    watchGetRandomPokemonAsync()
  ]);
}
