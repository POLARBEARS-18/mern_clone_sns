import { AuthUserType } from 'types/Auth/Auth';

// ユーザー入力に応じたアクション
export const LoginStart = (user: AuthUserType) => ({
  type: 'LOGIN_START',
  payload: user,
});

export const LoginSuccess = (user: AuthUserType) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});

export const LoginError = (error: AuthUserType) => ({
  type: 'LOGIN_ERROR',
  payload: error,
});
