import { takeEvery, call, put } from 'redux-saga/effects';
import {
  firestore,
  convertCollectionSnapshotToMap,
  addPokemonToFirestore
} from '../../firebase/firebase.utils';

import actionTypes from '../pokemons/pokemons.action-types';
import pokemonsApiService from '../../fetchapi/pokemonsApiService';
import {
  getRandomPokemon,
  catchPokemon,
  setPokemonFree,
  fetchFreePokemonsSuccess,
  fetchFreePokemonsFailure,
  fetchCapturedPokemonsSuccess,
  fetchCapturedPokemonsFailure
} from '../pokemons/pokemons.actions';

function* fetchFreePokemonsAsync() {
  try {
    const freePokemonsRef = firestore.collection('freePokemons');
    const mapCallback = doc => ({
      ...doc.data(),
      id: doc.id,
      photoId: doc.data().photoId
    });
    const snapshot = yield freePokemonsRef.get();
    const freePokemonsMap = yield call(
      convertCollectionSnapshotToMap,
      snapshot,
      mapCallback
    );
    yield put(fetchFreePokemonsSuccess(freePokemonsMap));
  } catch (error) {
    yield put(fetchFreePokemonsFailure(error.message));
  }
}

export function* watchFetchFreePokemonsAsync() {
  yield takeEvery(
    actionTypes.FETCH_FREE_POKEMONS_START,
    fetchFreePokemonsAsync
  );
}

function* fetchCapturedPokemonsAsync() {
  try {
    const capturedPokemonsRef = firestore.collection('capturedPokemons');
    const mapCallback = doc => ({
      ...doc.data(),
      id: doc.id,
      photoId: doc.data().photoId
    });
    const snapshot = yield capturedPokemonsRef.get();
    const capturedPokemonsMap = yield call(
      convertCollectionSnapshotToMap,
      snapshot,
      mapCallback
    );
    yield put(fetchCapturedPokemonsSuccess(capturedPokemonsMap));
  } catch (error) {
    yield put(fetchCapturedPokemonsFailure(error.message));
  }
}

export function* watchFetchCapturedPokemonsAsync() {
  yield takeEvery(
    actionTypes.FETCH_CAPTURED_POKEMONS_START,
    fetchCapturedPokemonsAsync
  );
}

function* catchPokemonAsync(action) {
  try {
    const newId = yield call(
      addPokemonToFirestore,
      'capturedPokemons',
      action.payload
    );
    const oldPokemonRef = firestore
      .collection('freePokemons')
      .doc(action.payload.id);
    yield oldPokemonRef.delete();
    const newPokemonRef = firestore.collection('capturedPokemons').doc(newId);
    const newPokemonSnapshot = yield newPokemonRef.get();
    const pokemon = [newPokemonSnapshot].map(doc => {
      return {
        ...doc.data(),
        id: doc.id,
        photoId: doc.data().photoId
      };
    })[0];

    yield put(catchPokemon(pokemon));
  } catch (error) {
    console.log(error.message);
  }
}
export function* watchCatchPokemonAsync() {
  yield takeEvery(actionTypes.CATCH_POKEMON_ASYNC, catchPokemonAsync);
}

function* setPokemonFreeAsync(action) {
  try {
    const newId = yield call(
      addPokemonToFirestore,
      'freePokemons',
      action.payload
    );
    const oldPokemonRef = firestore
      .collection('capturedPokemons')
      .doc(action.payload.id);
    yield oldPokemonRef.delete();
    const newPokemonRef = firestore.collection('freePokemons').doc(newId);
    const newPokemonSnapshot = yield newPokemonRef.get();
    const pokemon = [newPokemonSnapshot].map(doc => {
      return {
        ...doc.data(),
        id: doc.id,
        photoId: doc.data().photoId
      };
    })[0];

    yield put(setPokemonFree(pokemon));
  } catch (error) {
    console.log(error.message);
  }
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
