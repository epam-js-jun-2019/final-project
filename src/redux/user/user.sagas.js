import { takeLatest, all, call, put } from 'redux-saga/effects';
import {
  auth,
  googleProvider,
  createUserProfileDocument
} from '../../firebase/firebase.utils';
import { googleSignInSuccess, googleSignInFailure } from './user.actions';

import actionTypes from './user.action-types';

export function* googleSignInStart() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSignInSuccess({ ...userSnapshot.data(), id: userSnapshot.id })
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(actionTypes.GOOGLE_SIGN_IN_START, googleSignInStart);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
