import { css } from '@emotion/react';
import axios from 'axios';
import { RightBar } from 'components/rightbar/RightBar';
import { SideBar } from 'components/sidebar/SideBar';
import { TimeLine } from 'components/timeline/TimeLine';
import { TopBar } from 'components/topbar/TopBar';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserType } from 'types/User';

export const Profile = () => {
  const PUBLIC_FOLDER = import.meta.env.VITE_LOCAL_PUBLIC_FOLDER;

  const [user, setUser] = useState<UserType>({} as unknown as UserType);
  const { username } = useParams<Pick<UserType, 'username'>>();

  useEffect(() => {
    try {
      const fetchUser = async () => {
        const response = await axios.get<UserType>(`/api/users?username=${username!}`);

        // console.log(response);
        setUser(response.data);
      };
      void fetchUser();
    } catch (err) {
      console.log(err);
    }
  }, [username]);

  return (
    <div>
      <TopBar />
      <div css={SProfile}>
        <SideBar />
        <div css={SProfileRight}>
          <div css={SProfileRightTop}>
            <div css={SProfileCover}>
              <img
                src={user.coverPicture ? `${PUBLIC_FOLDER}${user.coverPicture}` : `${PUBLIC_FOLDER}post/3.jpeg`}
                alt=""
                css={SProfileCoverImg}
              />
              <img
                src={
                  user.profilePicture ? `${PUBLIC_FOLDER}${user.profilePicture}` : `${PUBLIC_FOLDER}person/noAvatar.png`
                }
                alt=""
                css={SProfileUserImg}
              />
            </div>
            <div css={SProfileInfo}>
              <h4 css={SProfileInfoName}>{user.username}</h4>
              <span css={SProfileInfoDesc}>{user.desc}</span>
            </div>
          </div>
          <div css={SProfileRightBottom}>
            <TimeLine username={user.username} />
            <RightBar username={user.username} />
          </div>
        </div>
      </div>
    </div>
  );
};

const SProfile = css`
  display: flex;
  width: 100%;
  background-color: #f8fcff;
`;
const SProfileRight = css`
  flex: 10.5;
`;
const SProfileRightTop = css``;
const SProfileRightBottom = css`
  display: flex;
`;

const SProfileCover = css`
  height: 20em;
  position: relative;
`;
const SProfileCoverImg = css`
  width: 100%;
  height: 15.625em;
  object-fit: cover;
`;
const SProfileUserImg = css`
  position: absolute;
  left: 0;
  right: 0;
  width: 9.375em;
  height: 9.375em;
  border-radius: 50%;
  margin: auto;
  top: 9.375em;
`;

const SProfileInfo = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SProfileInfoName = css``;
const SProfileInfoDesc = css``;
