import { css } from '@emotion/react';
import React, { FC, useContext } from 'react';
import Search from '@mui/icons-material/Search';
import { Chat, Notifications } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { SLink } from 'App';
import { AuthContext } from 'state/AuthContext';
import { UserType } from 'types/User';

export const TopBar: FC = () => {
  const PUBLIC_FOLDER = import.meta.env.VITE_LOCAL_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const authUser = user as UserType;

  return (
    <div css={STopBarContainer}>
      <div css={STopBarLeft}>
        <Link to="/" css={SLink}>
          <span css={SLogo}>Clone SNS</span>
        </Link>
      </div>
      <div css={STopBarCenter}>
        <div css={SSearchBar}>
          <Search css={SSearchIcon} />
          <input type="text" placeholder="探し物は何ですか？" css={SSearchInput} />
        </div>
      </div>
      <div css={STopBarRight}>
        <div css={STopBarIconItems}>
          <div css={STopBarIconItem}>
            <Chat />
            <span css={STopBarIconBadge}>1</span>
          </div>
          <div css={STopBarIconItem}>
            <Notifications />
            <span css={STopBarIconBadge}>2</span>
          </div>
          <Link to={`/profile/${authUser.username}`}>
            <img
              src={authUser ? `${PUBLIC_FOLDER}${authUser.profilePicture}` : `${PUBLIC_FOLDER}person/noAvatar.png`}
              alt=""
              css={STopBarImg}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
const STopBarContainer = css`
  background-color: #2c517c;
  height: 3.125em;
  width: 100%;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
`;
const STopBarLeft = css`
  flex: 3;
`;
const SLogo = css`
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  margin-left: 1.25em;
`;
const STopBarCenter = css`
  flex: 5;
`;
const STopBarRight = css`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
`;
const SSearchBar = css`
  width: 100%;
  height: 1.875em;
  background-color: white;
  border-radius: 1.5625em;
  display: flex;
  align-items: center;
`;
const SSearchInput = css`
  border: none;
  width: 80%;

  :focus {
    outline: none;
  }
`;
const SSearchIcon = css`
  font-size: 1.25rem;
  margin-left: 0.625em;
  margin-right: 0.3125em;
`;
const STopBarIconItems = css`
  display: flex;
`;
const STopBarIconItem = css`
  margin-right: 0.9375em;
  cursor: pointer;
  position: relative;
  top: 0.3125em;
`;
const STopBarIconBadge = css`
  position: absolute;
  top: -0.3125em;
  right: -0.3125em;
  background-color: #ff5900;
  width: 0.9375em;
  height: 0.9375em;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
`;
const STopBarImg = css`
  width: 2em;
  height: 2em;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
`;
