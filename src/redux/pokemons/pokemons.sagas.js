import { put, takeEvery, call } from 'redux-saga/effects';
import apiRequests from '../../fetchapi/http.lib';
import restApiLinks from '../../fetchapi/restful-api.links';
import actionTypes from '../pokemons/pokemons.action-types';
import pokemonsApiService from '../../fetchapi/pokemonsApiService';
import {
  getFreePokemons,
  getCapturedPokemons,
  getPokemons,
  getRandomPokemon,
  catchPokemon,
  setPokemonFree
} from '../pokemons/pokemons.actions';

function* catchPokemonAsync(action) {
  const data = yield call(pokemonsApiService.catchPokemon, action.payload);
  yield put(catchPokemon(data));
}

export function* watchCatchPokemonAsync() {
  yield takeEvery(actionTypes.CATCH_POKEMON_ASYNC, catchPokemonAsync);
}

function* setPokemonFreeAsync(action) {
  const data = yield call(pokemonsApiService.setPokemonFree, action.payload);
  yield put(setPokemonFree(data));
}

export function* watchSetPokemonFreeAsync() {
  yield takeEvery(actionTypes.SET_POKEMON_FREE_ASYNC, setPokemonFreeAsync);
}

function* getPokemonDataAsync() {
  const payload = yield apiRequests.get(restApiLinks.DB);
  yield put(getPokemons(payload));
}

export function* watchGetPokemonDataAsync() {
  yield takeEvery(actionTypes.GET_POKEMON_DATA_ASYNC, getPokemonDataAsync);
}

function* getFreePokemonsAsync() {
  const payload = yield apiRequests.get(restApiLinks.freePokemons);
  yield put(getFreePokemons(payload));
}

export function* watchGetFreePokemonsAsync() {
  yield takeEvery(actionTypes.GET_FREE_POKEMONS_ASYNC, getFreePokemonsAsync);
}

function* getCapturedPokemonsAsync() {
  const payload = yield apiRequests.get(restApiLinks.capturedPokemons);
  yield put(getCapturedPokemons(payload));
}

export function* watchGetCapturedPokemonsAsync() {
  yield takeEvery(
    actionTypes.GET_CAPTURED_POKEMONS_ASYNC,
    getCapturedPokemonsAsync
  );
}

function* getRandomPokemonAsync() {
  const pseudoRandomNumber = Math.floor(Math.random() * Math.floor(100)) + 10;
  const id = pseudoRandomNumber > 0 && pseudoRandomNumber;
  const payload = yield apiRequests.get(`${restApiLinks.freePokemons}/${id}`);
  yield put(getRandomPokemon(payload));
}

export function* watchGetRandomPokemonAsync() {
  yield takeEvery(actionTypes.GET_RANDOM_POKEMON_ASYNC, getRandomPokemonAsync);
}
