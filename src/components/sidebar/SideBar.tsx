import { css } from '@emotion/react';
import { Bookmark, Home, MessageRounded, Notifications, Person, Search, Settings } from '@mui/icons-material';
import { SLink } from 'App';
import { CloseFriend } from 'components/closeFriend/CloseFriend';
import { Users } from 'dummyData/DummyData';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from 'state/AuthContext';
import { UserType } from 'types/User';

export const SideBar = () => {
  const { user } = useContext(AuthContext);
  const authUser = user as UserType;

  return (
    <div css={SSideBar}>
      <div css={SSideBarWrapper}>
        <ul css={SSideBarList}>
          <li css={SSideBarListItem}>
            <Home css={SSideBarIcon} />
            <Link to="/" css={SLink}>
              <span css={SSideBarListItemText}>ホーム</span>
            </Link>
          </li>
          <li css={SSideBarListItem}>
            <Search css={SSideBarIcon} />
            <span css={SSideBarListItemText}>検索</span>
          </li>
          <li css={SSideBarListItem}>
            <Notifications css={SSideBarIcon} />
            <span css={SSideBarListItemText}>通知</span>
          </li>
          <li css={SSideBarListItem}>
            <MessageRounded css={SSideBarIcon} />
            <span css={SSideBarListItemText}>メッセージ</span>
          </li>
          <li css={SSideBarListItem}>
            <Bookmark css={SSideBarIcon} />
            <span css={SSideBarListItemText}>ブックマーク</span>
          </li>
          <li css={SSideBarListItem}>
            <Person css={SSideBarIcon} />
            <Link to={`/profile/${authUser.username}`} css={SLink}>
              <span css={SSideBarListItemText}>プロフィール</span>
            </Link>
          </li>
          <li css={SSideBarListItem}>
            <Settings css={SSideBarIcon} />
            <span css={SSideBarListItemText}>設定</span>
          </li>
        </ul>
        <hr css={SSideBarHr} />
        <ul css={SSideBarFriendList}>
          {Users.map((friendUser) => (
            <CloseFriend {...friendUser} key={friendUser.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const SSideBar = css`
  flex: 2.5;
  height: 100vh;
`;
const SSideBarWrapper = css`
  padding: 1.25em;
`;
const SSideBarList = css`
  padding: 0;
  margin: 0;
  list-style: none;
`;
const SSideBarListItem = css`
  display: flex;
  align-items: center;
  margin-bottom: 0.625em;
  padding: 0.25em 0.375em;
  cursor: pointer;

  box-shadow: 0px 8px 10px -1px #e2e3e9;
  border-radius: 10px;
  transition: all 0.2s;

  :hover {
    box-shadow: none;
    transform: translateY(0.1875rem);
  }
`;
const SSideBarIcon = css`
  font-size: 2.1875rem;
  margin-right: 0.625em;
`;
const SSideBarListItemText = css`
  font-size: 1.25rem;
  padding-top: 0.1875em;
`;
const SSideBarHr = css`
  margin: 1.25em 0;
`;

const SSideBarFriendList = css`
  padding: 0;
  margin: 0;
  list-style: none;
`;
