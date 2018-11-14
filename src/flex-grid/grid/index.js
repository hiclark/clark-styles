// @flow

import { type ComponentType } from 'react';

import styled from 'styled-components';
import GUTTER_SPACING from '../const';
import SPACING from '../../constants/spacing';
import MAX_WIDTH from '../../constants/max-width';
import media from '../../constants/media-queries';

type GridPropsType = {
  margin?: string,
};

export const Grid: ComponentType<GridPropsType> = styled.div`
  padding: 0 ${GUTTER_SPACING};
  ${MAX_WIDTH};
  margin: ${({ margin }) => margin || '0 auto'};
  width: 100%;

  ${media.small`
    padding: 0 ${SPACING.S_4};
  `};
`;

export default Grid;
