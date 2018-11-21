// @flow

import React, { type Node, type Element } from 'react';
import { type LocationShape } from 'react-router-dom';

import { Container, ButtonStyle, ButtonLink, Icon } from './styles';

type LayoutType = 'primary' | 'secondary' | 'fullWidth';

type PropsType = {
  type?: string,
  children: Node,
  styleType?: string,
  layout?: LayoutType,
  onClick?: () => void,
  disabled?: boolean,
  path?: string | LocationShape,
  className?: string,
  icon?: Element<string>,
  margin?: string,
};

const Button = ({
  type = 'submit',
  styleType = 'solid',
  layout = 'primary',
  children,
  onClick,
  disabled,
  className,
  path,
  icon,
  margin,
}: PropsType) => (
  <Container layout={layout}>
    {path ? (
      <ButtonLink
        to={path}
        layout={layout}
        styletype={styleType}
        margin={margin}
        disabled={disabled}
      >
        {icon && <Icon>{icon}</Icon>}
        {children}
      </ButtonLink>
    ) : (
      <ButtonStyle
        className={className}
        layout={layout}
        styletype={styleType}
        type={type}
        onClick={onClick}
        disabled={disabled}
        margin={margin}
      >
        {icon && <Icon>{icon}</Icon>}
        {children}
      </ButtonStyle>
    )}
  </Container>
);

export default Button;
