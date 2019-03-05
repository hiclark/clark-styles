// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkComponent = (props: any) => {
  const { children, path } = props;
  return <StyledLink to={path}>{children}</StyledLink>;
};

export default LinkComponent;

export const StyledLink = styled(Link)`
  color: green;
  margin: 12px;
  border: 1px solid red;
`;
