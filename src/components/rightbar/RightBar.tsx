import { css } from '@emotion/react';
import { OnlineFriend } from 'components/online/OnlineFriend';
import { Users, UserType } from 'dummyData/DummyData';
import React, { FC } from 'react';

type RightBarProps = Partial<Pick<UserType, 'username'>>;

export const RightBar: FC<RightBarProps> = (props) => {
  const { username } = props;

  const PUBLIC_FOLDER = import.meta.env.VITE_LOCAL_PUBLIC_FOLDER;

  const HomeRightBar = () => (
    <>
      <div css={SEventContainer}>
        <img src={`${PUBLIC_FOLDER}/star.png`} alt="" css={SStarImg} />
        <span css={SEventText}>
          <b>フォロワー限定イベント開催中</b>
        </span>
      </div>
      <img src={`${PUBLIC_FOLDER}/ad.jpeg`} alt="" css={SEventImg} />
      <h4 css={SRightBarTitle}>オンラインの友達</h4>
      <ul css={SRightBarFriendList}>
        {Users.map((user) => (
          <OnlineFriend {...user} key={user.id} />
        ))}
      </ul>
      <p css={SPromotionTitle}>プロモーション広告</p>
      <img src={`${PUBLIC_FOLDER}/promotion/promotion1.jpeg`} alt="" css={SRightBarPromotionImg} />
      <p css={SPromotionName}>ショッピング</p>
      <img src={`${PUBLIC_FOLDER}/promotion/promotion2.jpeg`} alt="" css={SRightBarPromotionImg} />
      <p css={SPromotionName}>ショッピング</p>
      <img src={`${PUBLIC_FOLDER}/promotion/promotion3.jpeg`} alt="" css={SRightBarPromotionImg} />
      <p css={SPromotionName}>ショッピング</p>
    </>
  );

  const ProfileRightBar = () => (
    <>
      <h4 css={SRightBarInfoTile}>ユーザー情報</h4>
      <div css={SRightBarInfo}>
        <div css={SRightBarInfoItem}>
          <span css={SRightBarInfoKey}>出身:</span>
          <span css={SRightBarInfoKey}>福岡</span>
        </div>
        <h4 css={SRightBarTitle}>あなたの友達</h4>
        <div css={SRightBarFollowings}>
          <div css={SRightBarFollowing}>
            <img src={`${PUBLIC_FOLDER}/person/1.jpeg`} alt="" css={SRightBarFollowingImg} />
            <span css={SRightBarFollowingName}>Kuma kun</span>
          </div>
          <div css={SRightBarFollowing}>
            <img src={`${PUBLIC_FOLDER}/person/2.jpeg`} alt="" css={SRightBarFollowingImg} />
            <span css={SRightBarFollowingName}>Kuma kun</span>
          </div>
          <div css={SRightBarFollowing}>
            <img src={`${PUBLIC_FOLDER}/person/3.jpeg`} alt="" css={SRightBarFollowingImg} />
            <span css={SRightBarFollowingName}>Kuma kun</span>
          </div>
          <div css={SRightBarFollowing}>
            <img src={`${PUBLIC_FOLDER}/person/4.jpeg`} alt="" css={SRightBarFollowingImg} />
            <span css={SRightBarFollowingName}>Kuma kun</span>
          </div>
          <div css={SRightBarFollowing}>
            <img src={`${PUBLIC_FOLDER}/person/5.jpeg`} alt="" css={SRightBarFollowingImg} />
            <span css={SRightBarFollowingName}>Kuma kun5</span>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div css={SRightBar}>
      <div css={SRightBarWrapper}> {username ? <ProfileRightBar /> : <HomeRightBar />} </div>
    </div>
  );
};

// Home CSS
const SRightBar = css`
  flex: 3.5;
`;
const SRightBarWrapper = css`
  padding: 1.25em 1.25em 0 0;
`;

const SEventContainer = css`
  display: flex;
  align-items: center;
`;
const SStarImg = css`
  width: 2.5em;
  height: 2.5em;
  margin-right: 0.3125em;
`;
const SEventText = css`
  font-weight: 300;
  font-size: 0.9375rem;
`;

const SEventImg = css`
  width: 100%;
  border-radius: 0.625em;
  margin: 1.5625em 0;
`;

// オンラインの友達
const SRightBarTitle = css`
  margin-bottom: 1.25em;
`;

const SRightBarFriendList = css`
  padding: 0;
  margin: 0;
  list-style: none;
`;

// プロモーション広告
const SPromotionTitle = css`
  font-size: 1.125rem;
  font-weight: 550;
  margin-bottom: -0.625em;
`;
const SRightBarPromotionImg = css`
  width: 85%;
  border-radius: 0.625em;
  margin: 1.5625em 0;
`;
const SPromotionName = css`
  font-size: small;
  color: #5e5e5e;
  margin-top: -1.25em;
`;

// Profile CSS
const SRightBarInfoTile = css`
  font-size: 1.125rem;
  font-weight: 550;
  margin-bottom: 0.625em;
`;
const SRightBarInfo = css`
  margin-bottom: 1.875em;
`;
const SRightBarInfoItem = css`
  margin-bottom: 0.625em;
`;
const SRightBarInfoKey = css`
  font-weight: 500;
  margin-right: 0.3125em;
  color: #555;
`;

const SRightBarFollowings = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const SRightBarFollowing = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25em;
  cursor: pointer;
`;
const SRightBarFollowingImg = css`
  width: 6.25em;
  height: 6.25em;
  border-radius: 0.3125em;
  object-fit: cover;
`;
const SRightBarFollowingName = css``;
