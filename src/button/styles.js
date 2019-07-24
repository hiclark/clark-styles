// @flow
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import TYPE_SCALE from '../constants/type-scale';
import BORDER_WIDTH from '../constants/border-width';
import BORDER_RADIUS from '../constants/border-radius';
import COLORS from '../constants/colors';
import FONT_WEIGHT from '../constants/font-weight';
import SPACING from '../constants/spacing';
import Z_INDEX from '../constants/z-index';
import MEDIA from '../constants/media-queries';
import BOX_SHADOW from '../constants/box-shadow';
import LETTER_SPACING from '../constants/letter-spacing';

const {
  CLARK_PRIMARY,
  CLARK_SECONDARY,
  CLARK_ORANGE_HOVER,
  GREY_100,
  GREY_25,
  GREY_10,
  WHITE,
} = COLORS;
const { TS_6 } = TYPE_SCALE;
const { BW_1 } = BORDER_WIDTH;
const { FW_600, FW_700 } = FONT_WEIGHT;
const { BR_2 } = BORDER_RADIUS;
const { S_1, S_2 } = SPACING;
const { Z_1, Z_BOTTOM } = Z_INDEX;
const { BS_PRIMARY, BS_DISABLED } = BOX_SHADOW;
const { LS_1, LS_1_5 } = LETTER_SPACING;

const BUTTON_COLOR_SECONDARY = '#c43d00';

const MAX_WIDTH = '17.5rem';

const primary = css`
  max-width: ${MAX_WIDTH};
  width: auto;
`;

const secondary = css`
  width: 100%;
  ${MEDIA.small`
    max-width: ${MAX_WIDTH};
    width: auto;
  `};
`;

const fullWidth = css`
  width: 100%;
`;

const buttonLayout = {
  primary: () => primary,
  secondary: () => secondary,
  fullWidth: () => fullWidth,
};

const solid = disabled => css`
  background: ${disabled ? GREY_25 : CLARK_PRIMARY};
  ${props => (props.disabled ? BS_DISABLED : BS_PRIMARY)};
  border: 0;
  color: ${WHITE};

  &:hover {
    background: ${CLARK_ORANGE_HOVER};
  }
`;

const outline = disabled => css`
  background: ${disabled ? GREY_25 : WHITE};
  border: ${disabled
    ? `${BW_1} solid ${GREY_25}`
    : `${BW_1} solid ${CLARK_PRIMARY}`};
  color: ${disabled ? WHITE : CLARK_PRIMARY};

  &:hover {
    border: ${BW_1} solid transparent;
    color: ${WHITE};
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

const outlineSecondary = disabled => css`
  ${FW_700};
  background: ${WHITE};
  border: ${BW_1} solid ${disabled ? GREY_25 : GREY_10};
  color: ${disabled ? GREY_25 : GREY_100};
  cursor: ${disabled ? 'auto' : 'pointer'};
  ${LS_1};
  text-transform: uppercase;
  ${BS_DISABLED};

  &:hover {
    background: ${WHITE};
    border: ${BW_1} solid ${disabled ? GREY_25 : CLARK_SECONDARY};
  }

  &::before {
    background: ${WHITE};
  }
`;

const buttonStyleType = disabled => ({
  solid: () => solid(disabled),
  outline: () => outline(disabled),
  outlineSecondary: () => outlineSecondary(disabled),
  dashed: () => dashed(disabled),
});

export const Container = styled.span`
  z-index: 0;
  position: relative;
  ${({ layout }) => layout === 'fullWidth' && 'width: 100%'};
`;

export const ButtonStyle = styled.button`
  ${TS_6};
  ${BR_2};
  ${Z_1};
  ${FW_600};
  ${LS_1_5};
  text-transform: uppercase;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  outline: 0;
  padding: ${S_1} ${S_2};
  position: relative;
  margin: ${({ margin }) => margin};
  ${({ layout }) => buttonLayout[layout]};
  text-decoration: none;
  ${({ disabled }) => disabled && 'pointer-events: none;'};

  &::before {
    ${BR_2};
    ${Z_BOTTOM};
    background: ${BUTTON_COLOR_SECONDARY};
    background: ${({ disabled }) =>
      disabled ? GREY_25 : BUTTON_COLOR_SECONDARY};
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity 0.25s ease-out;
  }

  &:hover::before {
    background: ${CLARK_ORANGE_HOVER};
  }

  ${({ styletype, disabled }) => buttonStyleType(disabled)[styletype]};
`;

export const ButtonLink = ButtonStyle.withComponent(Link);

export const Icon = styled.div`
  left: 0;
  position: absolute;
  padding: ${S_1};
  line-height: 0;
  ${ButtonStyle}:hover & {
    color: ${({ disabled, styletype }) =>
      styletype === 'outlineSecondary' && disabled ? GREY_25 : CLARK_SECONDARY};
  }
`;
