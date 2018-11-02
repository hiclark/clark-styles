// @flow

import { css } from 'styled-components';

// NOTE: This must always be the lowest value
const Z_BOTTOM = css`
  z-index: -1;
`;

const Z0 = css`
  z-index: 0;
`;

const Z1 = css`
  z-index: 1;
`;

const Z2 = css`
  z-index: 2;
`;

const Z3 = css`
  z-index: 3;
`;

const Z_TOP = css`
  z-index: 9;
`;

const Z_INDEX = {
  Z_BOTTOM,
  Z0,
  Z1,
  Z2,
  Z3,
  Z_Top,
};

export default Z_INDEX;
