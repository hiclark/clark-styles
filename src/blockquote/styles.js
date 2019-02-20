// @flow

import styled from 'styled-components';

import { Grid } from '../flex-grid';
import TYPE_SCALE from '../constants/type-scale';
import COLORS from '../constants/colors';
import FONT_WEIGHT from '../constants/font-weight';
import SPACING from '../constants/spacing';
import LINE_HEIGHT from '../constants/line-height';
import BOX_SHADOW from '../constants/box-shadow';
import LETTER_SPACING from '../constants/letter-spacing';

const { S_2, S_4 } = SPACING;
const { CLARK_SECONDARY, WHITE } = COLORS;
const { TS_3, TS_6 } = TYPE_SCALE;
const { FW_100, FW_400 } = FONT_WEIGHT;
const { COPY } = LINE_HEIGHT;
const { BS_LARGE } = BOX_SHADOW;
const { LS_2_5 } = LETTER_SPACING;

export const Container = styled.div`
  background-color: ${CLARK_SECONDARY};
  color: ${WHITE};
  position: relative;
  width: 100%;

  &::before {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 100% 0% 0% 100% / 100% 0% 0% 50%;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 70%;
  }
`;

export const GridWrapper = styled(Grid)`
  padding-bottom: ${S_4};
  padding-top: ${S_4};
`;

export const Quote = styled.blockquote`
  ${FW_100};
  ${TS_3};
  ${COPY};
  margin: 0 0 ${S_2} 0;
  position: relative;

  &::before {
    content: open-quote;
  }

  &::after {
    content: close-quote;
  }
`;

export const Emphasis = styled.span`
  ${FW_400};
`;

export const Attribution = styled.span`
  ${FW_400};
  ${TS_6};
  ${COPY};
  ${LS_2_5};
  display: block;
  margin-left: ${S_4};
  position: relative;
  text-transform: uppercase;
`;

export const Image = styled.img`
  ${BS_LARGE};
  display: block;
  margin-top: ${S_2};
  position: absolute;
`;
