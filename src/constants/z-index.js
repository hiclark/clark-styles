// @flow

import { css } from 'styled-components';

// NOTE: This must always be the lowest value
const Z_BOTTOM = css`
  z-index: -1;
`;

const Z_0 = css`
  z-index: 0;
`;

const Z_1 = css`
  z-index: 1;
`;

const Z_2 = css`
  z-index: 2;
`;

const Z_3 = css`
  z-index: 3;
`;

const Z_TOP = css`
  z-index: 9;
`;

const Z_INDEX = {
  Z_BOTTOM,
  Z_0,
  Z_1,
  Z_2,
  Z_3,
  Z_TOP,
};

export default Z_INDEX;
