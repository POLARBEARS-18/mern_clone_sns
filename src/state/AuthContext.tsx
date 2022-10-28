import React, { createContext, FC, useEffect, useReducer } from 'react';
import { AuthStateType } from 'types/Auth/Auth';
import { UserType } from 'types/User';
import { AuthReducer } from './AuthReducer';

type AuthContextProviderProps = {
  children: React.ReactChild;
};

const initialState: AuthStateType = {
  user: (JSON.parse(localStorage.getItem('user') as string) as UserType) || null,
  isFetching: false,
  error: false,
};

// グローバルで管理する
export const AuthContext = createContext(initialState);

export const AuthContextProvider: FC<AuthContextProviderProps> = (props) => {
  const { children } = props;

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
