// @flow

import React, { Component, Fragment, type Element, type Node } from 'react';
import { Link, type LocationShape } from 'react-router-dom';

import Spinner from '../spinner';
import Check from '../assets/icons/check.svg';

import {
  Container,
  Icon,
  Label,
  SecondaryIcon,
  StyledButton,
  StyledLink,
} from './styles';

type StyleType = 'dashed' | 'solid' | 'outline' | 'link';
type BtnStateType = 'active' | 'loading' | 'success';
type ButtonType = 'button' | 'reset' | 'submit';

type PropsType = {
  children: Node,
  isConfirmation?: boolean,
  disabled?: boolean,
  icon?: Element<'svg'>,
  isLoading?: boolean,
  margin?: string,
  onClick?: () => void,
  path?: string | LocationShape,
  isConfirmation: boolean,
  styleType?: StyleType,
  type?: ButtonType,
};

type StateType = {
  btnState: BtnStateType,
};

const ICON_SIZE = '24px';
const iconMap = label => ({
  active: label,
  loading: <Spinner size={ICON_SIZE} />,
  success: <Check />,
});

const ButtonLabel = ({ btnState, label, icon, isLoading, styleType }) => (
  <Fragment>
    {icon && (
      <SecondaryIcon hide={['loading', 'success'].includes(btnState) || isLoading}>
        {icon}
      </SecondaryIcon>
    )}
    <Label hasSecondaryIcon={icon}>
      <Icon underline={styleType === 'link'} outlineSuccess={styleType === 'outline' && btnState === 'success'}>
        {isLoading ? <Spinner size={ICON_SIZE} /> : iconMap(label)[btnState]}
      </Icon>
    </Label>
  </Fragment>
);

class Button extends Component<PropsType, StateType> {
  state = { btnState: 'active' };

  delay = () => setTimeout(() => this.setState({ btnState: 'success' }), 1000);

  handleClick = () => {
    const { onClick, isConfirmation } = this.props;

    if (isConfirmation) {
      this.setState({ btnState: 'loading' }, () => this.delay());
    }

    if (onClick) onClick();
  };

  render() {
    const { btnState } = this.state;
    const {
      children,
      disabled,
      icon,
      isConfirmation,
      isLoading,
      margin,
      path,
      styleType,
      type,
    } = this.props;

    return (
      <Container>
        {path ? (
          <StyledLink
            disabled={disabled}
            icon={icon}
            margin={margin}
            styleType={styleType || 'solid'}
            to={path}
            isConfirmation={isConfirmation}
          >
            <ButtonLabel
              btnState={btnState}
              label={children}
              icon={icon}
              isLoading={isLoading}
              styleType={styleType}
            />
          </StyledLink>
        ) : (
          <StyledButton
            btnState={btnState}
            disabled={btnState === 'loading' || isLoading || disabled}
            icon={icon}
            isConfirmation={isConfirmation}
            margin={margin}
            onClick={this.handleClick}
            styleType={styleType || 'solid'}
            type={type}
          >
            <ButtonLabel
              btnState={btnState}
              label={children}
              icon={icon}
              isLoading={isLoading}
              styleType={styleType}
            />
          </StyledButton>
        )}
      </Container>
    );
  }
}

export default Button;
