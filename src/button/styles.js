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
import LETTER_SPACING from '../constants/letter-spacing';

const {
  CLARK_PRIMARY,
  CLARK_SECONDARY,
  GREY_100,
  GREY_50,
  GREY_25,
  GREY_75,
  WHITE,
} = COLORS;
const { TS_6 } = TYPE_SCALE;
const { BW_1 } = BORDER_WIDTH;
const { FW_700 } = FONT_WEIGHT;
const { BR_2 } = BORDER_RADIUS;
const { S_1, S_2 } = SPACING;
const { Z_1, Z_BOTTOM } = Z_INDEX;
const { LS_1 } = LETTER_SPACING;

const BUTTON_COLOR_PRIMARY = '#FF6B18';
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
  background: ${disabled
    ? GREY_25
    : `linear-gradient(109deg, ${BUTTON_COLOR_PRIMARY}, ${CLARK_PRIMARY})`};
  box-shadow: ${props =>
    props.disabled ? '' : '0 2px 8px 0 rgba(234, 73, 0, 0.2)'};
  border: 0;
  color: ${WHITE};
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

const outlineSecondary = disabled => css`
  ${FW_700};
  background: ${WHITE};
  border: ${BW_1} solid ${disabled ? GREY_25 : GREY_50};
  color: ${disabled ? GREY_25 : GREY_100};
  cursor: ${disabled ? 'auto' : 'pointer'};
  ${LS_1};
  text-transform: uppercase;

  &:hover {
    background: ${WHITE};
    color: ${disabled ? GREY_25 : CLARK_PRIMARY};
  }

  &::before {
    background: ${WHITE};
  }
`;

const dashed = disabled => css`
  ${FW_700};
  background: ${WHITE};
  border: ${BW_1} dashed ${GREY_50};
  color: ${GREY_75};
  cursor: ${disabled ? 'auto' : 'pointer'};
  ${LS_1};
  text-transform: uppercase;
  opacity: ${disabled ? '0.4' : '1'};

  &:hover {
    background: ${WHITE};
    border: ${BW_1} dashed ${disabled ? GREY_25 : CLARK_SECONDARY};
  }

  &::before {
    background: transparent;
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
    opacity: 1;
  }

  ${({ styletype, disabled }) => buttonStyleType(disabled)[styletype]};
`;

export const ButtonLink = ButtonStyle.withComponent(Link);

export const Icon = styled.div`
  left: 0;
  position: absolute;
  padding: ${S_1};
  line-height: 0;
`;
