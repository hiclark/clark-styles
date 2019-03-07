// @flow

import React, { Component, type Node } from 'react';
import { Icon, Left, Label, Spacer, StyledButton } from './styles';
import SPACING from '../constants/spacing';
import Check from '../assets/icons/check.svg';
import Spinner from '../spinner';

const { S_05, S_1 } = SPACING;
const ICON_SIZE = `calc(${S_05} + ${S_1})`;

const ICONS = {
  confirmed: <Check />,
  loading: <Spinner size={ICON_SIZE} />,
};

type PropsType = {
  children: Node,
  disabled?: boolean,
  loadingTime?: number,
  margin?: string,
  onClick(): void,
  secondaryIcon?: Node,
  type?: string,
  variant?: string,
};

type StateType = {
  buttonState: 'confirmed' | 'loading' | 'ready',
};

class Cta extends Component<PropsType, StateType> {
  state = { buttonState: 'ready' };

  delayConfirmation = () => {
    const { loadingTime } = this.props;
    return setTimeout(() => {
      this.setState({ buttonState: 'confirmed' });
    }, loadingTime);
  };

  startLoading = () =>
    this.setState({ buttonState: 'loading' }, () => {
      this.delayConfirmation();
    });

  onClickHandler = () => {
    const { loadingTime, onClick } = this.props;
    if (loadingTime) {
      this.startLoading();
      return onClick();
    }

    return onClick();
  };

  render() {
    const { buttonState } = this.state;
    const {
      children,
      disabled,
      margin,
      secondaryIcon,
      type = 'submit',
      variant = 'solid',
    } = this.props;

    return (
      <StyledButton
        disabled={disabled || buttonState === 'loading'}
        margin={margin}
        onClick={this.onClickHandler}
        type={type}
        variant={variant}
      >
        <Left>{buttonState === 'ready' && secondaryIcon}</Left>
        <Label>
          {buttonState === 'ready' ? (
            children
          ) : (
            <Icon
              renderClarkSecondaryIcon={
                variant === 'outline' && buttonState === 'confirmed'
              }
            >
              {ICONS[buttonState]}
            </Icon>
          )}
        </Label>
        <Spacer />
      </StyledButton>
    );
  }
}

export default Cta;
