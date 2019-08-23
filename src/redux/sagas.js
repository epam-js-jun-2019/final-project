import { put, takeEvery, all } from 'redux-saga/effects';
import { getPokemonData } from '../fetchapi/fetch.methods';
import PokemonsActionTypes from './pokemons/pokemons.types';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* helloSaga() {
  yield delay(2200);
  console.log('Hello Sagas!');
}

function* getPokemonDataAsync() {
  const payload = yield getPokemonData();
  yield put({ type: PokemonsActionTypes.GET_POKEMON_DATA, payload });
  console.log(payload);
}

function* watchGetPokemonDataAsync() {
  yield takeEvery(
    PokemonsActionTypes.GET_POKEMON_DATA_ASYNC,
    getPokemonDataAsync
  );
}

export default function* rootSaga() {
  yield all([helloSaga(), watchGetPokemonDataAsync()]);
}
