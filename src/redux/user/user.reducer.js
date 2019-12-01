import actionTypes from './user.action-types';

const INITIAL_STATE = {
  userData: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.USER_SIGN_IN:
      return {
        ...state,
        userData: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
