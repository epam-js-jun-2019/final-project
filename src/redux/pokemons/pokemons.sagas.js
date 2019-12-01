import { put, takeEvery, call } from 'redux-saga/effects';
import actionTypes from '../pokemons/pokemons.action-types';
import pokemonsApiService from '../../fetchapi/pokemonsApiService';
import {
  getFreePokemons,
  getCapturedPokemons,
  getRandomPokemon,
  catchPokemon,
  setPokemonFree
} from '../pokemons/pokemons.actions';

function* catchPokemonAsync(action) {
  const payload = yield call(pokemonsApiService.catchPokemon, action.payload);
  yield put(catchPokemon(payload));
}

export function* watchCatchPokemonAsync() {
  yield takeEvery(actionTypes.CATCH_POKEMON_ASYNC, catchPokemonAsync);
}

function* setPokemonFreeAsync(action) {
  const payload = yield call(pokemonsApiService.setPokemonFree, action.payload);
  yield put(setPokemonFree(payload));
}

export function* watchSetPokemonFreeAsync() {
  yield takeEvery(actionTypes.SET_POKEMON_FREE_ASYNC, setPokemonFreeAsync);
}

function* getRandomPokemonAsync() {
  const payload = yield call(pokemonsApiService.getRandomPokemon);
  yield put(getRandomPokemon(payload));
}

export function* watchGetRandomPokemonAsync() {
  yield takeEvery(actionTypes.GET_RANDOM_POKEMON_ASYNC, getRandomPokemonAsync);
}

function* getFreePokemonsAsync() {
  const payload = yield call(pokemonsApiService.getFreePokemons);
  yield put(getFreePokemons(payload));
}

export function* watchGetFreePokemonsAsync() {
  yield takeEvery(actionTypes.GET_FREE_POKEMONS_ASYNC, getFreePokemonsAsync);
}

function* getCapturedPokemonsAsync() {
  const payload = yield call(pokemonsApiService.getCapturedPokemons);
  yield put(getCapturedPokemons(payload));
}

export function* watchGetCapturedPokemonsAsync() {
  yield takeEvery(
    actionTypes.GET_CAPTURED_POKEMONS_ASYNC,
    getCapturedPokemonsAsync
  );
}
