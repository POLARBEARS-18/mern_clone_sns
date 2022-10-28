import { FC, useContext } from 'react';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from 'pages/home/Home';
import { Profile } from 'pages/profile/Profile';
import { Login } from 'pages/login/Login';
import { Register } from 'pages/register/Register';
import { css } from '@emotion/react';
import { AuthContext } from 'state/AuthContext';

const App: FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

export const SLink = css`
  text-decoration: none;
  color: black;
`;
