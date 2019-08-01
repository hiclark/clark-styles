// @flow

import styled from 'styled-components';

import TYPE_SCALE from '../constants/type-scale';
import COLORS from '../constants/colors';
import FONT_WEIGHT from '../constants/font-weight';
import LETTER_SPACING from '../constants/letter-spacing';
import LINE_HEIGHT from '../constants/line-height';

const { GREY_100, CLARK_PRIMARY, GREY_75 } = COLORS;
const { TS_1, TS_2, TS_3, TS_4, TS_5, TS_6 } = TYPE_SCALE;
const { FW_600 } = FONT_WEIGHT;
const { LS_1_5 } = LETTER_SPACING;
const { COPY } = LINE_HEIGHT;

export const H1Headline = styled.div`
  ${TS_1};
  ${FW_600};
  color: ${GREY_100};
`;

export const H2Headline = styled.div`
  ${TS_2};
  ${FW_600};
  color: ${GREY_100};
`;

export const H3Headline = styled.div`
  ${TS_3};
  ${FW_600};
  color: ${GREY_100};
`;

export const BodyLarge = styled.div`
  ${TS_4};
  color: ${GREY_100};
  ${COPY};
`;

export const BodyText = styled.div`
  ${TS_5};
  color: ${GREY_100};
  ${COPY};
`;

export const BodySmall = styled.div`
  ${TS_6};
  color: ${GREY_100};
  ${COPY};
`;

export const CapsLabel = styled.div`
  ${TS_6};
  ${FW_600};
  ${LS_1_5};
  color: ${GREY_75};
  text-transform: uppercase;
`;

export const ErrorMessage = styled.div`
  ${TS_6};
  color: ${CLARK_PRIMARY};
`;
