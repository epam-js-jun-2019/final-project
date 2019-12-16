import actionTypes from './user.action-types';

const INITIAL_STATE = {
  userId: null,
  userData: null,
  errorMessage: null,
  isLoadingUser: false
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CHECK_USER_SESSION:
      return {
        ...state,
        isLoadingUser: true
      };
    case actionTypes.USER_SIGNED_OUT:
      return {
        ...state,
        userId: null,
        userData: null,
        isLoadingUser: false,
        errorMessage: null
      };
    case actionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        userId: action.payload.id,
        userData: { ...action.payload },
        isLoadingUser: false,
        errorMessage: null
      };
    case actionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        isLoadingUser: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
