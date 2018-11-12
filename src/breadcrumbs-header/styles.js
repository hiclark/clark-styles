// @flow
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import TYPE_SCALE from '../constants/type-scale';
import BORDER_WIDTH from '../constants/border-width';
import COLORS from '../constants/colors';
import FONT_WEIGHT from '../constants/font-weight';

const { GREY_100, GREY_10, WHITE } = COLORS;
const { TS_2, TS_5 } = TYPE_SCALE;
const { BW_1 } = BORDER_WIDTH;
const { FW_700, FW_400 } = FONT_WEIGHT;

export const Header = styled.div`
  align-items: center;
  background: ${WHITE};
  border-bottom: solid ${BW_1} ${GREY_10};
  display: flex;
  height: 80px;
`;

export const StyledLink = styled(Link)`
  ${FW_700};
  color: ${GREY_100};
  text-decoration: none;
`;

export const Separator = styled.span`
  ${TS_5};
  color: ${GREY_100};
`;

export const Headline = styled.h1`
  ${FW_400};
  ${TS_2};
  color: ${GREY_100};
`;
