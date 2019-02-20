// @flow

import styled from 'styled-components';
import { Grid, COLORS, FONT_WEIGHT, SPACING, TYPE_SCALE, LINE_HEIGHT } from 'clark-styles';

const { S_2, S_4 } = SPACING;
const { CLARK_SECONDARY, WHITE } = COLORS;
const { TS_3, TS_6 } = TYPE_SCALE;
const { FW_100, FW_400 } = FONT_WEIGHT;
const { COPY } = LINE_HEIGHT;

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
  display: block;
  letter-spacing: 2.5px;
  margin-left: ${S_4};
  position: relative;
  text-transform: uppercase;
`;

export const Image = styled.img`
  box-shadow: 15px 30px 30px -20px rgba(0, 0, 0, 0.2);
  display: block;
  margin-top: ${S_2};
  position: absolute;
`;
