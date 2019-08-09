// @flow

import styled, { css } from 'styled-components';

import TYPE_SCALE from '../constants/type-scale';
import BORDER_WIDTH from '../constants/border-width';
import BORDER_RADIUS from '../constants/border-radius';
import COLORS from '../constants/colors';
import FONT_WEIGHT from '../constants/font-weight';
import SPACING from '../constants/spacing';
import Z_INDEX from '../constants/z-index';
import BOX_SHADOW from '../constants/box-shadow';
import LETTER_SPACING from '../constants/letter-spacing';

const {
  CLARK_PRIMARY,
  CLARK_SECONDARY,
  CLARK_ORANGE_HOVER,
  GREY_100,
  GREY_75,
  GREY_25,
  WHITE,
} = COLORS;
const { TS_6 } = TYPE_SCALE;
const { BW_1 } = BORDER_WIDTH;
const { FW_700 } = FONT_WEIGHT;
const { BR_2 } = BORDER_RADIUS;
const { S_1 } = SPACING;
const { Z_1 } = Z_INDEX;
const { BS_PRIMARY, BS_DISABLED } = BOX_SHADOW;
const { LS_1_5 } = LETTER_SPACING;

const solid = disabled => css`
  background-color: ${disabled ? GREY_25 : CLARK_PRIMARY};
  border: ${BW_1} ${disabled ? GREY_25 : CLARK_PRIMARY};
  box-shadow: ${disabled ? BS_DISABLED : BS_PRIMARY};

  &:hover {
    background-color: ${disabled ? GREY_25 : CLARK_ORANGE_HOVER};
    border: ${BW_1} ${disabled ? GREY_25 : CLARK_ORANGE_HOVER};
  }
`;

const outline = disabled => css`
  background-color: ${WHITE};
  border: ${BW_1} solid ${disabled ? GREY_25 : GREY_75};
  color: ${disabled ? GREY_25 : GREY_100};

  &:hover {
    border: ${BW_1} solid ${disabled ? GREY_25 : CLARK_SECONDARY};
  }
`;

// eslint-disable-next-line no-unused-vars
const dashedBorder = disabled => css`
  background: linear-gradient(to right, ${GREY_25} 66%, #fff 0%) top/10px 1px
      repeat-x,
    linear-gradient(${GREY_25} 66%, #fff 0%) right/1px 10px repeat-y,
    linear-gradient(to right, ${GREY_25} 66%, #fff 0%) bottom/10px 1px repeat-x,
    linear-gradient(${GREY_25} 66%, #fff 0%) left/1px 10px repeat-y;
`;

// eslint-disable-next-line no-unused-vars
const dashedBorderHover = disabled => css`
  background: linear-gradient(to right, ${CLARK_SECONDARY} 66%, #fff 0%)
      top/10px 1px repeat-x,
    linear-gradient(${CLARK_SECONDARY} 66%, #fff 0%) right/1px 10px repeat-y,
    linear-gradient(to right, ${CLARK_SECONDARY} 66%, #fff 0%) bottom/10px 1px
      repeat-x,
    linear-gradient(${CLARK_SECONDARY} 66%, #fff 0%) left/1px 10px repeat-y;
`;

const dashed = disabled => css`
  background-color: ${WHITE};
  ${dashedBorder(disabled)}
  color: ${disabled ? GREY_25 : GREY_100};

  &:hover {
    ${dashedBorderHover(disabled)}
    opactiy: 0.4;
  }
`;

const buttonVariant = disabled => ({
  solid: () => solid(disabled),
  outline: () => outline(disabled),
  dashed: () => dashed(disabled),
});

export const StyledButton = styled.button`
  ${TS_6};
  ${BR_2};
  ${Z_1};
  ${FW_700};
  ${LS_1_5};
  ${({ disabled }) => disabled && 'pointer-events: none;'};
  padding: 0 ${S_1};
  margin: ${({ margin }) => margin};
  color: ${WHITE};
  width: 100%;
  cursor: pointer;
  outline: none;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  border: none;

  ${({ disabled, variant }) => buttonVariant(disabled)[variant]};
`;

export const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1;
`;

export const Label = styled.div`
  flex: 2;
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const Icon = styled.span`
  color: ${({ renderClarkSecondaryIcon }) =>
    renderClarkSecondaryIcon && CLARK_SECONDARY};
`;
