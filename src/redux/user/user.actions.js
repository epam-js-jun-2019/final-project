import actionTypes from './user.action-types';

export const setUserData = user => ({
  type: actionTypes.USER_SIGN_IN,
  payload: user
});

export const onUserSignOut = () => ({
  type: actionTypes.USER_SIGN_OUT
});

export const googleSignInStart = () => ({
  type: actionTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = emailAndPassword => ({
  type: actionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const signInSuccess = user => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: actionTypes.SIGN_IN_FAILURE,
  payload: error
});
