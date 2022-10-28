import { css } from '@emotion/react';
import { MoreVert } from '@mui/icons-material';
import axios from 'axios';
import React, { FC, useEffect, useState, useContext } from 'react';
import { PostType } from 'types/Post';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
import { AuthContext } from 'state/AuthContext';
import { UserType } from 'types/User';

export const Post: FC<PostType> = (props) => {
  const { _id, userId, img, desc, createdAt, likes } = props;
  const PUBLIC_FOLDER = import.meta.env.VITE_LOCAL_PUBLIC_FOLDER;

  const { user } = useContext(AuthContext);
  const authUser = user as UserType;

  const [postUser, setPostUser] = useState<UserType>({} as unknown as UserType);
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get<UserType>(`/api/users?userId=${userId}`);

      setPostUser(response.data);
    };
    void fetchUser();
  }, [userId]);

  const [clickLike, setClickLike] = useState(likes.length);
  const [isLike, setIsLike] = useState(false);

  const handleLike = async () => {
    try {
      await axios.put(`/api/posts/${_id}/like`, { userId: authUser._id });
    } catch (err) {
      console.log(err);
    }

    setClickLike(isLike ? clickLike - 1 : clickLike + 1);
    setIsLike(!isLike);
  };

  return (
    <div css={SPost}>
      <div css={SPostWrapper}>
        <div css={SPostTop}>
          <div css={SPostTopLeft}>
            <Link to={`/profile/${postUser.username}`}>
              <img
                src={
                  postUser.profilePicture
                    ? `${PUBLIC_FOLDER}${postUser.profilePicture}`
                    : `${PUBLIC_FOLDER}person/noAvatar.png`
                }
                alt=""
                css={SPostProfileImg}
              />
            </Link>
            <span css={SPostUserName}>{postUser.username} </span>
            <span css={SPostData}>{format(createdAt)}</span>
          </div>
          <div css={SPostTopRight}>
            <MoreVert />
          </div>
        </div>
        <div css={SPostCenter}>
          <span css={SPostText}>{desc}</span>
          <img src={PUBLIC_FOLDER + img} alt="" css={SPostImg} />
        </div>
        <div css={SPostBottom}>
          <div css={SPostBottomLeft}>
            <div
              role="button"
              tabIndex={0}
              onMouseUp={() => {
                void handleLike();
              }}
            >
              <img src={`${PUBLIC_FOLDER}heart.png`} alt="like" css={SLikeIcon} />
            </div>
            <span css={SPostLikeCounter}>{clickLike}人がいいねを押しました</span>
          </div>
          <div css={SPostBottomRight}>
            <span css={SPostCommentText}>1:コメント</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const SPost = css`
  width: 100%;
  box-shadow: 0px 8px 10px -1px #e2e3e9;
  border-radius: 10px;
  margin: 1.875em 0;
`;
const SPostWrapper = css`
  padding: 0.625em;
`;
const SPostTop = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SPostTopLeft = css`
  display: flex;
  align-items: center;
`;
const SPostProfileImg = css`
  width: 2em;
  height: 2em;
  border-radius: 50%;
  object-fit: cover;
`;
const SPostUserName = css`
  font-size: 0.9375rem;
  font-weight: 550;
  margin: 0 0.625em;
`;
const SPostData = css`
  font-size: 0.75em;
`;

const SPostTopRight = css``;

const SPostCenter = css`
  margin: 1.25em 0;
`;
const SPostText = css``;
const SPostImg = css`
  margin-top: 1.25em;
  width: 100%;
  max-height: 31.25em;
  object-fit: contain;
`;

const SPostBottom = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SPostBottomLeft = css`
  display: flex;
  align-items: center;
`;
const SLikeIcon = css`
  width: 1.5em;
  height: 1.5em;
  margin-right: 0.3125em;
  cursor: pointer;
`;
const SPostLikeCounter = css`
  font-size: 0.9375rem;
`;

const SPostBottomRight = css``;
const SPostCommentText = css`
  cursor: pointer;
  border-bottom: 1px solid gray;
  font-size: 0.9375rem;
  margin-right: 0.1875em;
`;
