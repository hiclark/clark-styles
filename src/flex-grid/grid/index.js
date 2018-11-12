// @flow

import { type ComponentType } from 'react';

import styled from 'styled-components';
import SPACING from '../../constants/spacing';
import MAX_WIDTH from '../../constants/max-width';

type GridPropsType = {
  margin?: string,
};

export const Grid: ComponentType<GridPropsType> = styled.div`
  padding: 0 ${SPACING.S_4};
  ${MAX_WIDTH};
  margin: ${({ margin }) => margin || '0 auto'};
  width: 100%;
`;

export default Grid;
