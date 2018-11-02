// @flow

import React, {
  Children,
  cloneElement,
  type ComponentType,
  type Node,
} from 'react';

import styled from 'styled-components';
import { identifyFirsts } from './helpers';
import { GUTTER_SPACING } from '../const';

type AlignmentType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'baseline';

type RowPropsType = {
  alignItems?: AlignmentType,
  children: Node,
  className?: string,
};

// If a column is at the beginning of a row, we want its left margin to be 0
// Because at smaller breakpoints, rows may need to wrap, we iterate through
// children to determine whether they begin a row at any breakpoint - W.P. 10/2018
export const Row = ({ children, alignItems, className }: RowPropsType) => {
  const { smFirsts, mdFirsts, lgFirsts } = identifyFirsts(children);

  return (
    <RowStyle alignItems={alignItems} className={className}>
      {Children.map(children, (c, i) =>
        cloneElement(c, {
          smFirst: smFirsts.includes(i),
          mdFirst: mdFirsts.includes(i),
          lgFirst: lgFirsts.includes(i),
        }),
      )}
    </RowStyle>
  );
};

export default Row;

const RowStyle: ComponentType<RowPropsType> = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 ${GUTTER_SPACING};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
`;
