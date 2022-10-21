import { css } from '@emotion/react';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const Home: FC = () => (
  <div css={SCenter}>
    <Link css={[SHoverDragDrop('#34cbe6')]} to="/redux_home">
      Redux練習
    </Link>
  </div>
);

const SCenter = css`
  /* color: #e63434; */
  margin: 5em auto;
  text-align: center;
  text-decoration: none;
  display: flex;
  flex-flow: column;
  font-size: 2em;
`;

const SHoverDragDrop = (color: string) => css`
  /* display: block; */
  margin-bottom: 1em;
  color: ${color};

  &:hover {
    text-shadow: 0 0 1.5em ${color};
  }
`;
