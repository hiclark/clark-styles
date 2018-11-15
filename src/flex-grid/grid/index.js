// @flow

import { type ComponentType } from 'react';

import styled from 'styled-components';
import SPACING from '../../constants/spacing';
import MAX_WIDTH from '../../constants/max-width';
import MEDIA from '../../constants/media-queries';
import GUTTER_SPACING from '../const';

type GridPropsType = {
  // NOTE: margin is deprecated in favor of verticalMargin, marginTop, and marginBottom
  // shouldn't ever need to adjust the horizontal margins of the grid.
  margin?: string,
  verticalMargin?: string,
  marginTop?: string,
  marginBottom?: string,
};

const { S_025, S_1, S_2 } = SPACING;

export const Grid: ComponentType<GridPropsType> = styled.div`
  ${MAX_WIDTH};
  margin: ${({ margin }) => margin || '0 auto'};
  ${({ verticalMargin }) =>
    verticalMargin &&
    `
    margin-top: ${verticalMargin};
    margin-bottom: ${verticalMargin};
  `};
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop};`};
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`};
  padding: 0 ${GUTTER_SPACING};
  width: 100%;

  ${MEDIA.small`
    padding: 0 calc(${GUTTER_SPACING} * 3);
  `};

  ${MEDIA.medium`
    padding: 0 calc(${S_025} + ${S_1} + ${S_2});
  `};
`;

export default Grid;
