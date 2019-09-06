import { put, takeEvery, all, call } from 'redux-saga/effects';
import apiRequests from 'FetchAPI/http.lib';
import restApiLinks from 'FetchAPI/restful-api.links';
import PokemonsActionTypes from 'Redux/pokemons/pokemons.types';
import pokemonsApiService from 'FetchAPI/pokemonsApiService';

function* catchPokemonAsync(action) {
  yield call(pokemonsApiService.catchPokemon, action.payload);
}

function* watchCatchPokemonAsync() {
  yield takeEvery(PokemonsActionTypes.CATCH_POKEMON_ASYNC, catchPokemonAsync);
}

function* setPokemonFreeAsync(action) {
  yield call(pokemonsApiService.setPokemonFree, action.payload);
}

function* watchSetPokemonFreeAsync() {
  yield takeEvery(
    PokemonsActionTypes.SET_POKEMON_FREE_ASYNC,
    setPokemonFreeAsync
  );
}

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
  yield all([
    watchGetPokemonDataAsync(),
    watchCatchPokemonAsync(),
    watchSetPokemonFreeAsync()
  ]);
}
