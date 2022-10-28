import { css } from '@emotion/react';
import { LoginCall } from 'ActionCalls';
import React, { useContext, useRef } from 'react';
import { AuthContext } from 'state/AuthContext';

export const Login = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    void LoginCall(
      {
        email: email.current?.value,
        password: password.current?.value,
      },
      dispatch!
    );
  };

  return (
    <div css={SLogin}>
      <div css={SLoginWrapper}>
        <div css={SLoginLeft}>
          <h3 css={SLoginLogo}>Kuma SNS</h3>
          <span css={SLoginDesc}>シロクマSNSを、自分の手で。</span>
        </div>
        <div css={SLoginRight}>
          <form onSubmit={(e) => handleSubmit(e)} css={SLoginBox}>
            <p css={SLoginMsg}>ログインはこちら</p>
            <input type="email" ref={email} placeholder="Eメール" required css={SLoginInput} />
            <input type="password" ref={password} placeholder="パスワード" required minLength={6} css={SLoginInput} />
            <button type="submit" css={SLoginButton}>
              ログイン
            </button>
            <span css={SLoginForgot}>パスワードを忘れた方へ</span>
            <button type="submit" css={SLoginRegisterButton}>
              アカウント作成
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Logo
const SLogin = css`
  width: 100vw;
  height: 100vh;
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SLoginWrapper = css`
  width: 70%;
  height: 70%;
  display: flex;
`;
const SLoginLeftRight = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const SLoginLeft = css`
  ${SLoginLeftRight}
`;
const SLoginRight = css`
  ${SLoginLeftRight}
`;
const SLoginLogo = css`
  font-size: 3.125rem;
  font-weight: 800;
  color: #41428b;
  margin: 0.625em;
`;

const SLoginDesc = css`
  font-size: 1.5rem;
  margin-left: 1em;
`;

// Account
const SLoginBox = css`
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
const SLoginMsg = css`
  text-align: center;
  font-weight: 550;
  font-size: 1.25rem;
  margin: 0.3125em;
`;
const SLoginInput = css`
  height: 3.125em;
  border-radius: 0.625em;
  border: 1px solid gray;
  font-size: 1.125rem;
  padding-left: 1.25em;

  :focus {
    outline: none;
  }
`;
const SLoginButton = css`
  height: 2.8125rem;
  border-radius: 0.625em;
  border: none;
  background-color: #41428b;
  color: white;
  font-size: 1.25rem;
  font-weight: 500;
  cursor: pointer;
`;
const SLoginForgot = css`
  text-align: center;
  color: #41428b;
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
`;
