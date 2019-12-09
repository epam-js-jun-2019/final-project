import actionTypes from './user.action-types';

const INITIAL_STATE = {
  userId: null,
  userData: null,
  errorMessage: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case actionTypes.USER_SIGN_IN:
    //   return {
    //     ...state,
    //     userId: action.payload.id,
    //     userData: { ...action.payload.userData }
    //   };
    case actionTypes.GOOGLE_SIGN_IN_SUCCESS:
    case actionTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        userId: action.payload.id,
        userData: { ...action.payload },
        errorMessage: null
      };
    case actionTypes.GOOGLE_SIGN_IN_FAILURE:
    case actionTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
