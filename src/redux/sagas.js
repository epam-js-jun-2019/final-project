import { put, takeEvery, all } from 'redux-saga/effects';
import apiRequests from 'FetchAPI/http.lib';
import restApiLinks from 'FetchAPI/restful-api.links';
import PokemonsActionTypes from 'Redux/pokemons/pokemons.types';

function* getPokemonDataAsync() {
  const payload = yield apiRequests.get(restApiLinks.DB);
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
