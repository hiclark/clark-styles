// @flow

import React, { type Node } from 'react';
import StyledLink from './styles';

type PropsType = {
  children: Node,
  margin: string,
  path: string,
};

const LinkComponent = ({ children, margin, path }: PropsType) => (
  <StyledLink margin={margin} to={path}>
    {children}
  </StyledLink>
);

export default LinkComponent;
