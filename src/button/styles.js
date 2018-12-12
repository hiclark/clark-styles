// @flow

import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import COLORS from '../constants/colors';
import BORDER_RADIUS from '../constants/border-radius';
import BORDER_WIDTH from '../constants/border-width';
import SPACING from '../constants/spacing';
import TYPE_SCALE from '../constants/type-scale';
import FONT_WEIGHT from '../constants/font-weight';
import Z_INDEX from '../constants/z-index';

const {
  CLARK_PRIMARY,
  CLARK_SECONDARY,
  GREY_10,
  GREY_25,
  GREY_75,
  WHITE,
} = COLORS;
const { TS_6 } = TYPE_SCALE;
const { BW_1 } = BORDER_WIDTH;
const { FW_400, FW_700 } = FONT_WEIGHT;
const { BR_2 } = BORDER_RADIUS;
const { S_1, S_2 } = SPACING;
const { Z_0 } = Z_INDEX;

const BUTTON_COLOR_TERTIARY = '#c43d00';
const ICON_SIZE = '1.25rem';
const PADDING = '1.6rem';

const borderColor = (disabled, type) => `${BW_1} ${type} ${disabled ? GREY_10 : GREY_25}`;
const borderColorHover = (disabled, type) => `${BW_1} ${type} ${disabled ? GREY_10 : CLARK_SECONDARY}`;

export const Container = styled.span`
  ${Z_0};
  position: relative;
  width: 100%;
`;

const solid = disabled => css`
  background: ${disabled ? GREY_25 : CLARK_PRIMARY};
  border: 0;
  color: ${WHITE};

  &:hover {
    background: ${disabled ? GREY_25 : BUTTON_COLOR_TERTIARY};
  }
`;

const outline = disabled => css`
  background: ${WHITE};
  border: ${borderColor(disabled, 'solid')};
  color: ${disabled ? GREY_25 : GREY_75};
  &:hover {
    border: ${borderColorHover(disabled, 'solid')};
    color: ${disabled ? GREY_25 : GREY_75};
  }
`;

const link = css`
  ${FW_400};
  color: ${CLARK_SECONDARY};
  text-transform: capitalize;
  padding: 0;
  border: 0;
  &:hover {
    text-decoration: underline;
  }
`;

const dashed = disabled => css`
  background: ${WHITE};
  border: ${borderColor(disabled, 'dashed')};
  color: ${disabled ? GREY_10 : GREY_75};
  &:hover {
    border: ${borderColorHover(disabled, 'dashed')};
    color: ${disabled ? GREY_10 : GREY_75};
  }
`;

const variant = disabled => ({
  solid: () => solid(disabled),
  outline: () => outline(disabled),
  dashed: () => dashed(disabled),
  link,
});

export const StyledButton = styled.button`
  ${FW_700};
  ${TS_6};
  ${BR_2};
  ${Z_INDEX.Z_1};
  padding: ${PADDING} ${S_2};
  margin: ${({ margin }) => margin};
  pointer-events: ${({ disabled }) => disabled && 'none'};
  letter-spacing: 1px;
  width: 100%;
  max-width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  ${({ disabled, styleType }) => variant(disabled)[styleType]};
  &:focus {
    outline: none;
  }
`;

export const StyledLink = StyledButton.withComponent(Link);

export const Label = styled.span`
  position: absolute;
  margin-left: auto;
  white-space: nowrap;
  margin-right: ${({ hasSecondaryIcon }) => hasSecondaryIcon && 'auto'};
`;

export const SecondaryIcon = styled.span`
  position: absolute;
  height: ${ICON_SIZE};
  width: ${ICON_SIZE};
  left: ${S_1};
  display: ${({ hide }) => hide && 'none'};
`;

export const Icon = styled.span`
  height: ${ICON_SIZE};
  width: ${ICON_SIZE};
  color: ${({ outlineSuccess }) => outlineSuccess && CLARK_SECONDARY};
`;
