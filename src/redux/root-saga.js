import { all } from 'redux-saga/effects';
import {
  watchGetPokemonDataAsync,
  watchCatchPokemonAsync,
  watchSetPokemonFreeAsync,
  watchGetRandomPokemonAsync
} from './pokemons/pokemons.sagas';

export default function* rootSaga() {
  yield all([
    watchGetPokemonDataAsync(),
    watchCatchPokemonAsync(),
    watchSetPokemonFreeAsync(),
    watchGetRandomPokemonAsync()
  ]);
}
