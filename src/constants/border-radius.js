// @flow

import { css } from 'styled-components';

const BR_1 = css`
  border-radius: 0.125rem;
`;
const BR_2 = css`
  border-radius: 0.25rem;
`;
const BR_3 = css`
  border-radius: 0.5rem;
`;

const BR_4 = css`
  border-radius: 1rem;
`;

const BR_5 = css`
  border-radius: 1.25rem;
`;

const BR_6 = css`
  border-radius: 1.5rem;
`;

const CIRCLE = css`
  border-radius: 100%;
`;

const BORDER_RADIUS = {
  BR_1,
  BR_2,
  BR_3,
  BR_4,
  BR_5,
  BR_6,
  CIRCLE,
};

export default BORDER_RADIUS;
