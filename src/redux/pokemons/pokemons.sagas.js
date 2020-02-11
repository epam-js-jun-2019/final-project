import { takeLatest, all, call, put } from 'redux-saga/effects';
import {
  firestore,
  convertCollectionSnapshotToMap,
  addPokemonToFirestore
} from '../../firebase/firebase.utils';

import actionTypes from '../pokemons/pokemons.action-types';
import {
  fetchRandomPokemon,
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
    console.error(error.message);
    yield put(fetchFreePokemonsFailure(error.message));
  }
}

export function* onFetchFreePokemonsAsync() {
  yield takeLatest(
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
    console.error(error.message);
    yield put(fetchCapturedPokemonsFailure(error.message));
  }
}

export function* onFetchCapturedPokemonsAsync() {
  yield takeLatest(
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
    console.error(error.message);
  }
}
export function* onCatchPokemonAsync() {
  yield takeLatest(actionTypes.CATCH_POKEMON_ASYNC, catchPokemonAsync);
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
    console.error(error.message);
  }
}
export function* onSetPokemonFreeAsync() {
  yield takeLatest(actionTypes.SET_POKEMON_FREE_ASYNC, setPokemonFreeAsync);
}

function* fetchRandomPokemonAsync() {
  try {
    const pseudoRandomNumber = Math.floor(Math.random() * Math.floor(100)) + 10;
    const id = pseudoRandomNumber > 0 && pseudoRandomNumber;
    const pokemonRef = firestore
      .collection('pokemons')
      .where('photoId', '==', id);
    const pokemonSnapshot = yield pokemonRef
      .get()
      .then(snapshot => snapshot.docs[0]);
    const pokemon = [pokemonSnapshot].map(doc => {
      return {
        ...doc.data(),
        id: doc.id,
        photoId: doc.data().photoId
      };
    })[0];

    yield put(fetchRandomPokemon(pokemon));
  } catch (error) {
    console.error(error.message);
  }
}
export function* onFetchRandomPokemonAsync() {
  yield takeLatest(
    actionTypes.FETCH_RANDOM_POKEMON_ASYNC,
    fetchRandomPokemonAsync
  );
}

export function* pokemonsSagas() {
  yield all([
    call(onCatchPokemonAsync),
    call(onSetPokemonFreeAsync),
    call(onFetchRandomPokemonAsync),
    call(onFetchFreePokemonsAsync),
    call(onFetchCapturedPokemonsAsync)
  ]);
}
