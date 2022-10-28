import { css } from '@emotion/react';
import { UserType } from 'dummyData/DummyData';
import React, { FC } from 'react';

export const OnlineFriend: FC<UserType> = (props) => {
  const { profilePicture, username } = props;

  const PUBLIC_FOLDER = import.meta.env.VITE_LOCAL_PUBLIC_FOLDER;

  return (
    <li css={SRightBarFriend}>
      <div css={SRightBarProfileImgContainer}>
        <img src={PUBLIC_FOLDER + profilePicture} alt="" css={SRightBarProfileImg} />
        <span css={SRightBarOnline} />
      </div>
      <span css={SRightBarUsername}>{username}</span>
    </li>
  );
};

const SRightBarFriend = css`
  display: flex;
  align-items: center;
  margin-bottom: 0.9375em;
`;
const SRightBarProfileImgContainer = css`
  margin-right: 0.625em;
  position: relative;
`;
const SRightBarProfileImg = css`
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  object-fit: cover;
`;
const SRightBarUsername = css`
  font-weight: 550;
`;

// オンラインアイコン
const SRightBarOnline = css`
  background-color: purple;
  position: absolute;
  width: 0.75em;
  height: 0.75em;
  border-radius: 50%;
  top: -0.125em;
  left: 0;
  border: 0.125em solid white;
`;
