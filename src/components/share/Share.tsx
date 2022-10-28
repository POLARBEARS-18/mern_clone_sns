import { css } from '@emotion/react';
import { Analytics, Face, Gif, Image } from '@mui/icons-material';
import axios from 'axios';
import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from 'state/AuthContext';
import { UserType } from 'types/User';

export const Share = () => {
  const PUBLIC_FOLDER = import.meta.env.VITE_LOCAL_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const authUser = user as UserType;

  const [file, setFile] = useState<File>();

  const desc = useRef<HTMLInputElement>(null);
  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPost = {
      userId: authUser._id,
      desc: desc.current?.value,
    };

    try {
      await axios.post('/api/posts', newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div css={SShare}>
      <div css={SShareWrapper}>
        <div css={SShareTop}>
          <img
            src={
              authUser.profilePicture
                ? `${PUBLIC_FOLDER}${authUser.profilePicture}`
                : `${PUBLIC_FOLDER}person/noAvatar.png`
            }
            alt=""
            css={SShareProfileImg}
          />
          <input type="text" ref={desc} placeholder="今何している" css={SShareInput} />
        </div>
        <hr css={SShareHr} />
        <form
          onSubmit={(e) => {
            void handelSubmit(e);
          }}
          css={SShareButtons}
        >
          <div css={SShareOptions}>
            <label htmlFor="file" css={SShareOption}>
              <Image css={SShareIcon} htmlColor="blue" />
              <span css={SShareOptionText}>写真</span>
              <input
                type="file"
                id="file"
                accept=".png, .jpeg, .jpg"
                onChange={(e) => {
                  setFile(e.target.files![0]);
                }}
                css={SShareOptionImg}
              />
            </label>
            <div css={SShareOption}>
              <Gif css={SShareIcon} htmlColor="hotpink" />
              <span css={SShareOptionText}>GIF</span>
            </div>
            <div css={SShareOption}>
              <Face css={SShareIcon} htmlColor="green" />
              <span css={SShareOptionText}>気持ち</span>
            </div>
            <div css={SShareOption}>
              <Analytics css={SShareIcon} htmlColor="red" />
              <span css={SShareOptionText}>投票</span>
            </div>
          </div>
          <button type="submit" css={SShareButton}>
            投稿
          </button>
        </form>
      </div>
    </div>
  );
};

const SShare = css`
  width: 100%;
  height: 10.625em;

  box-shadow: 0px 8px 10px -1px #e2e3e9;
  border-radius: 10px;
`;
const SShareWrapper = css`
  padding: 0.625em;
`;
const SShareTop = css`
  display: flex;
  align-items: center;
`;
const SShareProfileImg = css`
  width: 3.125em;
  height: 3.125em;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.625em;
`;
const SShareInput = css`
  border: none;
  width: 100%;
  background-color: #f8fcff;

  :focus {
    outline: none;
  }
`;

const SShareHr = css`
  margin: 1.25em;
`;
const SShareButtons = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SShareOptions = css`
  display: flex;
  margin-left: 1.25em;
`;
const SShareOption = css`
  display: flex;
  align-items: center;
  margin-right: 0.9375em;
  cursor: pointer;
`;
const SShareIcon = css`
  margin-right: 0.1875em;
`;
const SShareOptionText = css`
  font-size: 0.875rem;
  font-weight: 550;
`;
const SShareOptionImg = css`
  display: none;
`;

const SShareButton = css`
  border: none;
  padding: 0.375em 1.0625em;
  background-color: #2c517c;
  border-radius: 0.3125em;
  color: white;
  cursor: pointer;
  margin-right: 1.25em;
`;
