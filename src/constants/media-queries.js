// @flow

import { css } from 'styled-components';

const SIZES = {
  large: 1280,
  medium: 1024,
  small: 768,
};

const MEDIA = Object.keys(SIZES).reduce((acc, label) => {
  acc[label] = (...args: any[]) => css`
    @media (min-width: ${SIZES[label]}px) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default MEDIA;
