import React from 'react';
import { UserType } from 'types/User';

export type AuthActionType = {
  type: 'LOGIN_START' | 'LOGIN_SUCCESS' | 'LOGIN_ERROR';
  payload: AuthUserType | UserType | Error;
};

export type AuthStateType = {
  user: AuthUserType | UserType | Error | null;
  isFetching: boolean;
  error: AuthUserType | UserType | Error | boolean;
  dispatch?: React.Dispatch<AuthActionType>;
};

export type AuthUserType = {
  email: string | undefined;
  password: string | undefined;
};
