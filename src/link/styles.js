// @flow

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../constants/colors';

const { CLARK_SECONDARY } = COLORS;

const StyledLink = styled(Link)`
  color: ${CLARK_SECONDARY};
  margin: ${({ margin }) => margin};
  text-decoration: none;
  display: inline-block;
  text-transform: capitalize;

  &:hover {
    text-decoration: underline;
  }
`;

export default StyledLink;
