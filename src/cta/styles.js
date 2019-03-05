// @flow

import styled, { css } from 'styled-components';

import TYPE_SCALE from '../constants/type-scale';
import BORDER_WIDTH from '../constants/border-width';
import BORDER_RADIUS from '../constants/border-radius';
import COLORS from '../constants/colors';
import FONT_WEIGHT from '../constants/font-weight';
import SPACING from '../constants/spacing';
import Z_INDEX from '../constants/z-index';

const { CLARK_PRIMARY, CLARK_SECONDARY, GREY_75, GREY_25, WHITE } = COLORS;
const { TS_6 } = TYPE_SCALE;
const { BW_1 } = BORDER_WIDTH;
const { FW_700 } = FONT_WEIGHT;
const { BR_2 } = BORDER_RADIUS;
const { S_1 } = SPACING;
const { Z_1 } = Z_INDEX;

const DARK_ORANGE = '#C43D00';

const solid = disabled => css`
  background-color: ${disabled ? GREY_25 : CLARK_PRIMARY};
  border: ${BW_1} solid ${disabled ? GREY_25 : CLARK_PRIMARY};

  &:hover {
    background-color: ${disabled ? GREY_25 : DARK_ORANGE};
    border: ${BW_1} solid ${disabled ? GREY_25 : DARK_ORANGE};
  }
`;

const outline = disabled => css`
  background-color: ${WHITE};
  border: ${BW_1} solid ${disabled ? GREY_25 : GREY_75};
  color: ${disabled ? GREY_25 : GREY_75};

  &:hover {
    border: ${BW_1} solid ${disabled ? GREY_25 : CLARK_SECONDARY};
  }
`;

const dashed = disabled => css`
  background-color: ${WHITE};
  border: ${BW_1} dashed ${disabled ? GREY_25 : GREY_75};
  color: ${disabled ? GREY_25 : GREY_75};

  &:hover {
    border: ${BW_1} dashed ${disabled ? GREY_25 : CLARK_SECONDARY};
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

  ${({ disabled, variant }) => buttonVariant(disabled)[variant]};
`;

export const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1;
`;

export const Middle = styled.div`
  flex: 2;
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const Icon = styled.span`
  color: ${({ isOutline }) => isOutline && CLARK_SECONDARY};
`;
