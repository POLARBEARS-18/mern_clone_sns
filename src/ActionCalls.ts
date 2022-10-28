import axios from 'axios';
import React from 'react';
import { AuthActionType, AuthUserType } from 'types/Auth/Auth';
import { UserType } from 'types/User';

export const LoginCall = async (user: AuthUserType, dispatch: React.Dispatch<AuthActionType>) => {
  dispatch({ type: 'LOGIN_START', payload: { email: '', password: '' } });
  try {
    const response = await axios.post<UserType>('/api/auth/login', user);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (err) {
    if (err instanceof Error) {
      dispatch({ type: 'LOGIN_ERROR', payload: err });
    }
  }
};
