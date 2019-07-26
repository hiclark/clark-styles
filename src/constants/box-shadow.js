// @flow

import { css } from 'styled-components';

const BS_SMALL = css`
  box-shadow: 15px 18px 15px -15px rgba(0, 0, 0, 0.1);
`;

const BS_LARGE = css`
  box-shadow: 32px 64px 40px -30px rgba(0, 0, 0, 0.1);
`;

const BS_DISABLED = css`
  box-shadow: 10px 10px 15px -15px rgba(0, 0, 0, 0.2);
`;

const BS_PRIMARY = css`
  box-shadow: 0 1px 3px 0 rgba(234, 73, 0, 0.3);
`;

const BOX_SHADOW = {
  BS_SMALL,
  BS_LARGE,
  BS_DISABLED,
  BS_PRIMARY,
};

export default BOX_SHADOW;
