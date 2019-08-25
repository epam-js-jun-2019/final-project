import { put, takeEvery, all } from 'redux-saga/effects';
import { APIgetPokemonData } from 'FetchAPI/fetch.methods';
import PokemonsActionTypes from 'Redux/pokemons/pokemons.types';

function* getPokemonDataAsync() {
  const payload = yield APIgetPokemonData();
  yield put({ type: PokemonsActionTypes.GET_POKEMON_DATA, payload });
}

function* watchGetPokemonDataAsync() {
  yield takeEvery(
    PokemonsActionTypes.GET_POKEMON_DATA_ASYNC,
    getPokemonDataAsync
  );
}

export default function* rootSaga() {
  yield all([watchGetPokemonDataAsync()]);
}
