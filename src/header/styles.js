// @flow
import styled from 'styled-components';

import Wordmark from '../assets/icons/clark-wordmark.svg';
import Phone from '../assets/icons/phone.svg';
import COLORS from '../constants/colors';
import TYPE_SCALE from '../constants/type-scale';
import FONT_WEIGHT from '../constants/font-weight';
import SPACING from '../constants/spacing';

const { S_05 } = SPACING;
const { CLARK_PRIMARY, GREY_100, WHITE } = COLORS;
const { FW_100, FW_700 } = FONT_WEIGHT;
const { TS_5 } = TYPE_SCALE;

const HEADER_HEIGHT = '88px';
const WORDMARK_WIDTH = '160px';
const ICON_SIZE = '18px';

export const HeaderWrapper = styled.header`
  align-items: center;
  background-color: ${WHITE};
  box-shadow: 15px 18px 15px -15px rgba(0, 0, 0, 0.1);
  display: flex;
  height: ${HEADER_HEIGHT};
  position: relative;
  width: 100%;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
`;

// $FlowFixMe;
export const Logo = styled(Wordmark)`
  display: block;
  color: ${CLARK_PRIMARY};
  width: ${WORDMARK_WIDTH};
`;

export const ContactInfoItem = styled.span`
  ${TS_5};
  ${({ isFirst }) => (isFirst ? FW_700 : FW_100)};
  color: ${GREY_100};
  display: block;
  margin-bottom: ${({ isFirst }) => (isFirst ? S_05 : 0)};
`;

export const PhoneLink = styled.a`
  color: ${GREY_100};
  text-decoration: none;
`;

// $FlowFixMe;
export const PhoneIcon = styled(Phone)`
  height: ${ICON_SIZE};
  margin-left: auto;
  margin-bottom: auto;
  margin-right: ${S_05};
  width: ${ICON_SIZE};
`;
