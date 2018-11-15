// @flow
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { TYPE_SCALE_F6 } from 'styles/type-scale';
import { FONT_WEIGHT_700 } from 'styles/font-weight';
import {
  CLARK_PRIMARY,
  CLARK_SECONDARY,
  GREY_25,
  BORDER_COLOR_PRIMARY,
  BUTTON_COLOR_PRIMARY,
  BUTTON_COLOR_SECONDARY,
  BUTTON_COLOR_TERTIARY,
  WHITE,
  TRANSPARENT,
} from 'styles/colors';
import { BORDER_RADIUS_F2 } from 'styles/border-radius';
import { BORDER_WIDTH_1 } from 'styles/borders';
import { SPACING_MEDIUM, SPACING_LARGE } from 'styles/spacing';
import { Z_INDEX_1, Z_INDEX_BOTTOM } from 'styles/z-index';

import media from 'styles/media-queries';

const MAX_WIDTH = '17.5rem';

const primary = css`
  max-width: ${MAX_WIDTH};
  width: auto;
`;

const secondary = css`
  max-width: 100%;
  width: 100%;
  ${media.small`
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
    : `linear-gradient(109deg, ${BUTTON_COLOR_SECONDARY}, ${BUTTON_COLOR_PRIMARY})`};
  box-shadow: ${props => (props.disabled ? '' : '0 2px 8px 0 rgba(234, 73, 0, 0.2)')};
  border: 0;
  color: ${WHITE};
`;

const outline = disabled => css`
  background: ${disabled ? GREY_25 : WHITE};
  border: ${disabled
    ? `${BORDER_WIDTH_1} solid ${GREY_25}`
    : `${BORDER_WIDTH_1} solid ${BUTTON_COLOR_PRIMARY}`};
  color: ${disabled ? WHITE : CLARK_PRIMARY};

  &:hover {
    border: ${BORDER_WIDTH_1} solid ${TRANSPARENT};
    color: ${disabled ? WHITE : WHITE};
  }
`;

const outlineSecondary = disabled => css`
  ${FONT_WEIGHT_700};
  background: ${WHITE};
  border: ${BORDER_WIDTH_1} solid ${disabled ? GREY_25 : BORDER_COLOR_PRIMARY};
  color: ${disabled ? GREY_25 : CLARK_SECONDARY};
  cursor: ${disabled ? 'auto' : 'pointer'};
  letter-spacing: 1px;
  text-transform: uppercase;

  &:hover {
    background: ${WHITE};
    color: ${disabled ? GREY_25 : CLARK_PRIMARY};
  }

  &::before {
    background: ${WHITE};
  }
`;

const buttonStyleType = disabled => ({
  solid: () => solid(disabled),
  outline: () => outline(disabled),
  outlineSecondary: () => outlineSecondary(disabled),
});

export const Container = styled.span`
  z-index: 0;
  position: relative;
  ${({ layout }) => layout === 'fullWidth' && 'width: 100%'};
`;

export const ButtonStyle = styled.button`
  ${TYPE_SCALE_F6};
  ${BORDER_RADIUS_F2};
  ${Z_INDEX_1};
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  outline: 0;
  padding: ${SPACING_MEDIUM} ${SPACING_LARGE};
  position: relative;
  margin: ${({ margin }) => margin};
  ${({ layout }) => buttonLayout[layout]};
  text-decoration: none;
  ${({ disabled }) => disabled && 'pointer-events: none;'};

  &::before {
    ${BORDER_RADIUS_F2};
    ${Z_INDEX_BOTTOM};
    background: ${BUTTON_COLOR_TERTIARY};
    background: ${({ disabled }) => (disabled ? GREY_25 : BUTTON_COLOR_TERTIARY)};
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
  padding: ${SPACING_MEDIUM};
  line-height: 0;
`;
