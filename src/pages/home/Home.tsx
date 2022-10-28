import { css } from '@emotion/react';
import { RightBar } from 'components/rightbar/RightBar';
import { SideBar } from 'components/sidebar/SideBar';
import { TimeLine } from 'components/timeline/TimeLine';
import { TopBar } from 'components/topbar/TopBar';
import React, { FC } from 'react';

export const Home: FC = () => (
  <div>
    <TopBar />
    <div css={SHomeContainer}>
      <SideBar />
      <TimeLine />
      <RightBar />
    </div>
  </div>
);

const SHomeContainer = css`
  display: flex;
  width: 100%;
  background-color: #f8fcff;
`;
