// @flow

import React from 'react';
import StyledLink from './styles';

type PropsType = {
  children: any,
  margin: string,
  path: string,
};

const LinkComponent = ({ children, margin, path }: PropsType) => (
  <StyledLink margin={margin} to={path}>
    {children}
  </StyledLink>
);

export default LinkComponent;
