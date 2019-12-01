import actionTypes from './user.action-types';

const INITIAL_STATE = {
  userId: null,
  userData: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.USER_SIGN_IN:
      return {
        ...state,
        userId: action.payload.id,
        userData: { ...action.payload.userData }
      };
    default:
      return state;
  }
};

export default userReducer;
