// @flow

import styled, { css } from 'styled-components';

import TYPE_SCALE from '../constants/type-scale';
import BORDER_RADIUS from '../constants/border-radius';
import COLORS from '../constants/colors';
import FONT_WEIGHT from '../constants/font-weight';
import SPACING from '../constants/spacing';
import LINE_HEIGHT from '../constants/line-height';
import TRANSITIONS from '../constants/transitions';
import Z_INDEX from '../constants/z-index';

const { CLARK_TERTIARY, GREY_100, GREY_50, GREY_10, WHITE } = COLORS;
const { TS_5 } = TYPE_SCALE;
const { FW_100 } = FONT_WEIGHT;
const { BR_3 } = BORDER_RADIUS;
const { S_025, S_1, S_2 } = SPACING;
const { COPY } = LINE_HEIGHT;
const { EASE_IN_OUT_25 } = TRANSITIONS;
const { Z_TOP, Z_BOTTOM } = Z_INDEX;

const BORDER = `calc(${S_2} - ${S_025})`;
const WIDTH = '350px';
const TRANSPARENT_BORDER = `${BORDER} solid transparent`;
const WHITE_BORDER = `${BORDER} solid ${WHITE}`;
const POSITIONING_SPACER = '8px';

export const Container = styled.div`
  position: relative;
`;

export const StyledTrigger = styled.span`
  ${TS_5};
  ${FW_100};
  ${COPY};
  color: ${CLARK_TERTIARY};
  cursor: pointer;
`;

const getTipPosition = {
  left: '3%',
  right: '80%',
  middle: '40%',
};

const right = css`
  left: 20%;
  top: 50%;
  margin-left: ${S_1};
  transform: translateX(0%) translateY(-50%);

  &::before {
    border-top: ${TRANSPARENT_BORDER};
    border-bottom: ${TRANSPARENT_BORDER};
    border-right: ${WHITE_BORDER};
    left: -${POSITIONING_SPACER};
    top: 30%;
  }
`;

const left = css`
  left: 0%;
  top: 50%;
  margin-left: -${S_1};
  transform: translateX(-100%) translateY(-50%);

  &::before {
    border-top: ${TRANSPARENT_BORDER};
    border-bottom: ${TRANSPARENT_BORDER};
    border-left: ${WHITE_BORDER};
    left: 100%;
    top: 30%;
  }
`;

const bottom = tipPosition => css`
  top: 100%;
  left: 50%;
  margin-top: ${POSITIONING_SPACER};
  transform: translateX(-50%) translateY(0%);

  &::before {
    width: ${S_1};
    height: ${S_1};
    background: ${WHITE};
    margin-left: ${getTipPosition[tipPosition]};
    top: -${POSITIONING_SPACER};
    transform: rotate(225deg);
    box-shadow: 1px 1px 0 ${GREY_10};
  }
`;

const positionPicker = tipPosition => ({
  bottom: () => bottom(tipPosition),
  left: () => left,
  right: () => right,
});

export const StyledPopover = styled.span`
  ${TS_5};
  ${FW_100};
  ${COPY};
  ${BR_3};
  ${EASE_IN_OUT_25};
  ${Z_TOP};
  color: ${GREY_100};
  background-color: ${WHITE};
  padding: ${S_1};
  text-align: left;
  width: ${WIDTH};
  position: absolute;
  display: inline-block;
  cursor: pointer;
  word-wrap: break-word;
  box-shadow: 0 1px 4px 0 ${GREY_50};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  ${({ visible }) => (visible ? Z_TOP : Z_BOTTOM)};

  &::before {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
  }

  ${({ position, tipPosition }) =>
    positionPicker(tipPosition)[position || 'bottom']};
`;
