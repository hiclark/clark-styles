// @flow

import { type ComponentType } from 'react';

import styled from 'styled-components';
import media from '../../constants/media-queries';
import { GUTTER_SPACING } from '../const';

const DOUBLE_GUTTER_SPACING = `calc(2 * ${GUTTER_SPACING})`;
const QUADRUPLE_GUTTER_SPACING = `calc(4 * ${GUTTER_SPACING})`;

type ColPropsType = {
  sm: number,
  smOffset?: number,
  md: number,
  mdOffset?: number,
  lg: number,
  lgOffset?: number,
};

const widthOfInnerMargins = `calc(11 * ${DOUBLE_GUTTER_SPACING})`;
const availableWidthAfterMargins = `calc(100% - ${widthOfInnerMargins})`;
const singleColumnWidth = `calc(${availableWidthAfterMargins} / 12)`;

// Width of an element =
// number of columns it occupies x width of a single column + width of straddled gutters
// - W.P. 10/2018
const calculateWidth = (cols: number) =>
  `calc(${cols} * ${singleColumnWidth} + calc(${cols -
    1} * ${DOUBLE_GUTTER_SPACING}))`;

const calculateMarginLeft = (first: boolean, offset: ?number) => {
  if (offset) {
    return `margin-left: calc(${
      first ? DOUBLE_GUTTER_SPACING : QUADRUPLE_GUTTER_SPACING
    } + ${calculateWidth(offset)})`;
  }
  if (first) {
    return `margin-left: 0`;
  }
  return `margin-left: ${DOUBLE_GUTTER_SPACING}`;
};

export const Col: ComponentType<ColPropsType> = styled.div`
  flex: 0 0 auto;
  width: ${({ sm }) => calculateWidth(sm)};
  ${({ smFirst, smOffset }) => calculateMarginLeft(smFirst, smOffset)};
  ${media.medium`
    width: ${({ md }) => calculateWidth(md)};
    ${({ mdFirst, mdOffset }) => calculateMarginLeft(mdFirst, mdOffset)};
  `};
  ${media.large`
    width: ${({ lg }) => calculateWidth(lg)};
    ${({ lgFirst, lgOffset }) => calculateMarginLeft(lgFirst, lgOffset)};
  `};
`;

export default Col;
