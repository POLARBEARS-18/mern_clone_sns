import { AuthActionType, AuthStateType } from 'types/Auth/Auth';

export const AuthReducer = (state: AuthStateType, action: AuthActionType) => {
  switch (action.type) {
    case 'LOGIN_START':
      return { user: null, isFetching: true, error: false };
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case 'LOGIN_ERROR':
      return {
        user: null,
        isFetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
