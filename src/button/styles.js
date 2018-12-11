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

const ICON_SIZE = '1.25rem';

export const Container = styled.span`
  z-index: 0;
  position: relative;
  width: 100%;
`;

const primary = disabled => css`
  background: ${disabled ? COLORS.GREY_25 : COLORS.CLARK_PRIMARY};
  border: 0;
  color: ${COLORS.WHITE};
  &:hover {
    background: ${disabled ? COLORS.GREY_25 : COLORS.BUTTON_COLOR_TERTIARY};
  }
`;

const secondary = disabled => css`
  background: ${COLORS.WHITE};
  border: ${disabled
    ? `${BORDER_WIDTH.BW_1} solid ${COLORS.GREY_10}`
    : `${BORDER_WIDTH.BW_1} solid ${COLORS.GREY_25}`};
  color: ${disabled ? COLORS.GREY_25 : COLORS.GREY_75};
  &:hover {
    border: ${disabled
      ? `${BORDER_WIDTH.BW_1} solid ${COLORS.GREY_10}`
      : `${BORDER_WIDTH.BW_1} solid ${COLORS.CLARK_SECONDARY}`};
    color: ${disabled ? COLORS.GREY_25 : COLORS.GREY_75};
  }
`;

const tertiary = css`
  ${FONT_WEIGHT.FW_400};
  color: ${COLORS.CLARK_SECONDARY};
  text-transform: capitalize;
  padding: 0;
  border: 0;
  &:hover {
    text-decoration: underline;
  }
`;

const dashed = disabled => css`
  background: ${COLORS.WHITE};
  border: ${disabled
    ? `${BORDER_WIDTH.BW_1} dashed ${COLORS.GREY_10}`
    : `${BORDER_WIDTH.BW_1} dashed ${COLORS.GREY_25}`};
  color: ${disabled ? COLORS.GREY_10 : COLORS.GREY_75};
  &:hover {
    border: ${disabled
      ? `${BORDER_WIDTH.BW_1} dashed ${COLORS.GREY_10}`
      : `${BORDER_WIDTH.BW_1} dashed ${COLORS.CLARK_SECONDARY}`};
    color: ${disabled ? COLORS.GREY_10 : COLORS.GREY_75};
  }
`;

const buttonStyleType = disabled => ({
  primary: () => primary(disabled),
  secondary: () => secondary(disabled),
  dashed: () => dashed(disabled),
  tertiary,
});

export const StyledButton = styled.button`
  ${FONT_WEIGHT.FW_700};
  ${TYPE_SCALE.TS_6};
  ${BORDER_RADIUS.BR_2};
  ${Z_INDEX.Z_1};
  padding: ${SPACING.S_1};
  margin: ${({ margin }) => margin};
  letter-spacing: 1px;
  width: 100%;
  max-width: 100%;
  height: auto;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  ${({ disabled }) => disabled && 'pointer-events: none;'};
  ${({ disabled, styleType }) => buttonStyleType(disabled)[styleType]};
  &:focus {
    outline: none;
  }
  svg {
    height: ${ICON_SIZE};
    width: ${ICON_SIZE};
    color: ${({ btnState, styleType, variant }) =>
      styleType !== 'primary' &&
      btnState === 'success' &&
      variant === 'dialog' &&
      COLORS.CLARK_SECONDARY};
  }
`;

export const StyledLink = StyledButton.withComponent(Link);

export const Label = styled.span`
  margin-right: ${({ hasSecondaryIcon }) => hasSecondaryIcon && 'auto'};
`;

export const SecondaryIcon = styled.span`
  height: ${ICON_SIZE};
  width: ${ICON_SIZE};
  margin-right: auto;
  visibility: ${({ btnState, variant }) =>
    (btnState === 'loading' ||
      (btnState === 'success' && variant === 'dialog')) &&
    'hidden'};
`;
