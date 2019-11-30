import { all } from 'redux-saga/effects';
import {
  watchGetPokemonDataAsync,
  watchCatchPokemonAsync,
  watchSetPokemonFreeAsync
} from 'Redux/pokemons/pokemons.sagas';

export default function* rootSaga() {
  yield all([
    watchGetPokemonDataAsync(),
    watchCatchPokemonAsync(),
    watchSetPokemonFreeAsync()
  ]);
}
