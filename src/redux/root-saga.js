import { all } from 'redux-saga/effects';
import {
  watchCatchPokemonAsync,
  watchSetPokemonFreeAsync,
  watchGetRandomPokemonAsync,
  watchFetchFreePokemonsAsync,
  watchFetchCapturedPokemonsAsync
} from './pokemons/pokemons.sagas';

export default function* rootSaga() {
  yield all([
    watchCatchPokemonAsync(),
    watchSetPokemonFreeAsync(),
    watchGetRandomPokemonAsync(),
    watchFetchFreePokemonsAsync(),
    watchFetchCapturedPokemonsAsync()
  ]);
}
