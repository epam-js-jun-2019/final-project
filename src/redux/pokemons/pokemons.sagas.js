import { put, takeEvery, call } from 'redux-saga/effects';
import apiRequests from 'FetchAPI/http.lib';
import restApiLinks from 'FetchAPI/restful-api.links';
import PokemonsActionTypes from 'Redux/pokemons/pokemons.types';
import pokemonsApiService from 'FetchAPI/pokemonsApiService';
import { catchPokemon, setPokemonFree } from 'Redux/pokemons/pokemons.actions';

function* catchPokemonAsync(action) {
  const data = yield call(pokemonsApiService.catchPokemon, action.payload);
  yield put(catchPokemon(data));
}

export function* watchCatchPokemonAsync() {
  yield takeEvery(PokemonsActionTypes.CATCH_POKEMON_ASYNC, catchPokemonAsync);
}

function* setPokemonFreeAsync(action) {
  const data = yield call(pokemonsApiService.setPokemonFree, action.payload);
  yield put(setPokemonFree(data));
}

export function* watchSetPokemonFreeAsync() {
  yield takeEvery(
    PokemonsActionTypes.SET_POKEMON_FREE_ASYNC,
    setPokemonFreeAsync
  );
}

function* getPokemonDataAsync() {
  const payload = yield apiRequests.get(restApiLinks.DB);
  yield put({ type: PokemonsActionTypes.GET_POKEMON_DATA, payload });
}

export function* watchGetPokemonDataAsync() {
  yield takeEvery(
    PokemonsActionTypes.GET_POKEMON_DATA_ASYNC,
    getPokemonDataAsync
  );
}
