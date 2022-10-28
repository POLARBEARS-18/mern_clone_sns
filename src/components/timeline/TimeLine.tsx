import { css } from '@emotion/react';
import axios from 'axios';
import { Post } from 'components/post/Post';
import { Share } from 'components/share/Share';
import React, { FC, useContext, useEffect, useState } from 'react';
import { AuthContext } from 'state/AuthContext';
import { PostType } from 'types/Post';
import { UserType } from 'types/User';

type TimeLine = Partial<Pick<UserType, 'username'>>;

export const TimeLine: FC<TimeLine> = (props) => {
  const { username } = props;
  const [posts, setPosts] = useState<Array<PostType>>([] as unknown as Array<PostType>);

  const { user } = useContext(AuthContext);
  const authUser = user as UserType;

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get<Array<PostType>>(`/api/posts/profile/${username}`)
        : await axios.get<Array<PostType>>(`/api/posts/timeline/${authUser._id}`);

      // console.log(response);
      setPosts(response.data);
    };
    void fetchPosts();
  }, [username, authUser]);

  return (
    <div css={STimeLine}>
      <div css={STimeLineWrapper}>
        <Share />
        {posts.map((post) => (
          <Post {...post} key={post._id} />
        ))}
      </div>
    </div>
  );
};

const STimeLine = css`
  flex: 6;
`;
const STimeLineWrapper = css`
  padding: 1.25em;
`;
