// @flow

import React from 'react';
import StyledFlex from './styles';

type FlexDirectionType = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type FlexWrapType = 'nowrap' | 'wrap' | 'wrapReverse';
type AlignmentType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'baseline';

type FlexPropsType = {
  flexDirection?: FlexDirectionType,
  flexWrap?: FlexWrapType,
  justifyContent?: AlignmentType,
  alignContent?: AlignmentType,
  alignItems?: AlignmentType,
  margin?: string,
  padding?: string,
  width?: string,
  height?: string,
};

const Flex = (props: FlexPropsType) => <StyledFlex {...props} />;

export default Flex;
