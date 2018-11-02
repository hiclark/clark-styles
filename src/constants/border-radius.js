// @flow

import { css } from 'styled-components';

const F1 = css`
  border-radius: 0.125rem;
`;
const F2 = css`
  border-radius: 0.25rem;
`;
const F3 = css`
  border-radius: 0.5rem;
`;

const F4 = css`
  border-radius: 1rem;
`;

const F5 = css`
  border-radius: 1.25rem;
`;

const F6 = css`
  border-radius: 1.5rem;
`;

const CIRCLE = css`
  border-radius: 100%;
`;

const BORDER_RADIUS = {
  F1,
  F2,
  F3,
  F4,
  F5,
  F6,
  CIRCLE,
};

export default BORDER_RADIUS;
