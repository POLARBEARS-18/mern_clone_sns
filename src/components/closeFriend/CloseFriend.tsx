import { css } from '@emotion/react';
import { UserType } from 'dummyData/DummyData';
import React, { FC } from 'react';

export const CloseFriend: FC<UserType> = (props) => {
  const { profilePicture, username } = props;

  const PUBLIC_FOLDER = import.meta.env.VITE_LOCAL_PUBLIC_FOLDER;

  return (
    <li css={SSideBarFriend}>
      <img src={PUBLIC_FOLDER + profilePicture} alt="" css={SSideBarFriendImg} />
      <span css={SSideBarFriendName}>{username}</span>
    </li>
  );
};

const SSideBarFriend = css`
  display: flex;
  align-items: center;
  margin-bottom: 0.9375em;
`;
const SSideBarFriendImg = css`
  width: 2em;
  height: 2em;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 0.625em;
`;
const SSideBarFriendName = css``;
