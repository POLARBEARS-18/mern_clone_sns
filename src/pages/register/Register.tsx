import { css } from '@emotion/react';
import axios from 'axios';
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Register = () => {
  const username = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const passwordConfirmation = useRef<HTMLInputElement>(null);
  // const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password.current?.value !== passwordConfirmation.current?.value) {
      passwordConfirmation.current?.setCustomValidity('パスワードが違います。');
    } else {
      try {
        const authUser = {
          username: username.current?.value,
          email: email.current?.value,
          password: password.current?.value,
        };
        await axios.post('/api/auth/register', authUser);
        navigate('/login');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div css={SRegister}>
      <div css={SRegisterWrapper}>
        <div css={SRegisterLeft}>
          <h3 css={SRegisterLogo}>Kuma SNS</h3>
          <span css={SRegisterDesc}>シロクマSNSを、自分の手で。</span>
        </div>
        <div css={SRegisterRight}>
          <form
            onSubmit={(e) => {
              void handleSubmit(e);
            }}
            css={SRegisterBox}
          >
            <p css={SRegisterMsg}>新規登録はこちら</p>
            <input type="text" ref={username} placeholder="ユーザー名" required css={SRegisterInput} />
            <input type="email" ref={email} placeholder="Eメール" required css={SRegisterInput} />
            <input
              type="password"
              ref={password}
              placeholder="パスワード"
              required
              minLength={6}
              css={SRegisterInput}
            />
            <input
              type="password"
              ref={passwordConfirmation}
              placeholder="確認用パスワード"
              required
              minLength={6}
              css={SRegisterInput}
            />
            <button type="submit" css={SRegisterButton}>
              サインアップ
            </button>
            <Link to="/login">
              <button type="submit" css={SLoginRegisterButton}>
                ログイン
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

// Logo
const SRegister = css`
  width: 100vw;
  height: 100vh;
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SRegisterWrapper = css`
  width: 70%;
  height: 70%;
  display: flex;
`;
const SRegisterLeftRight = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const SRegisterLeft = css`
  ${SRegisterLeftRight}
`;
const SRegisterRight = css`
  ${SRegisterLeftRight}
`;
const SRegisterLogo = css`
  font-size: 3.125rem;
  font-weight: 800;
  color: #41428b;
  margin: 0.625em;
`;

const SRegisterDesc = css`
  font-size: 1.5rem;
  margin-left: 1em;
`;

// Account
const SRegisterBox = css`
  height: 25em;
  padding: 1.25em;
  background-color: white;
  border-radius: 0.625em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: 0px 8px 10px -1px #e2e3e9;
  border-radius: 10px;
`;
const SRegisterMsg = css`
  text-align: center;
  font-weight: 550;
  font-size: 1.25rem;
  margin: 0.3125em;
`;
const SRegisterInput = css`
  height: 3.125em;
  border-radius: 0.625em;
  border: 1px solid gray;
  font-size: 1.125rem;
  padding-left: 1.25em;
  margin-bottom: 0.625em;

  :focus {
    outline: none;
  }
`;
const SRegisterButton = css`
  height: 2.8125rem;
  border-radius: 0.625em;
  border: none;
  background-color: #41428b;
  color: white;
  font-size: 1.25rem;
  font-weight: 500;
  cursor: pointer;
`;
const SLoginRegisterButton = css`
  height: 2.8125rem;
  width: 60%;
  align-self: center;
  border-radius: 0.625em;
  border: none;
  background-color: #4aa861;
  color: white;
  font-size: 1.25rem;
  font-weight: 500;
  cursor: pointer;

  margin-top: 0.9375em;
`;
