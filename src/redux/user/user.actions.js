import actionTypes from './user.action-types';

export const checkUserSession = () => ({
  type: actionTypes.CHECK_USER_SESSION
});

export const onUserSignOut = () => ({
  type: actionTypes.USER_SIGNED_OUT
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
