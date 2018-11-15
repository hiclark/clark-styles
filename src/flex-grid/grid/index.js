// @flow

import { type ComponentType } from 'react';

import styled from 'styled-components';
import SPACING from '../../constants/spacing';
import MAX_WIDTH from '../../constants/max-width';

type GridPropsType = {
  // NOTE: margin is deprecated in favor of verticalMargin, marginTop, and marginBottom
  // shouldn't ever need to adjust the horizontal margins of the grid.
  margin?: string,
  verticalMargin?: string,
  marginTop?: string,
  marginBottom?: string,
};

export const Grid: ComponentType<GridPropsType> = styled.div`
  padding: 0 ${SPACING.S_4};
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
  width: 100%;
`;

export default Grid;
