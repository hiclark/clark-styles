// @flow

import React, { Component } from 'react';
import { Left, Middle, Right, StyledButton } from './styles';
import Check from '../assets/icons/check.svg';
import Spinner from '../spinner';

const ICON_SIZE = '24px';
const ICONS = {
  confirmed: <Check />,
  loading: <Spinner size={ICON_SIZE} />,
};

class Cta extends Component<*, *> {
  state = {
    buttonState: 'ready',
  };

  isSubmitting = () => {
    const { loadingTime } = this.props;
    return setTimeout(() => {
      this.setState({ buttonState: 'confirmed' });
    }, loadingTime);
  };

  onClickHandler = () => {
    this.setState({ buttonState: 'loading' }, () => {
      this.isSubmitting();
    });
  };

  render() {
    const { buttonState } = this.state;
    const { children, disabled, onClick, secondaryIcon, variant } = this.props;

    return (
      <StyledButton
        disabled={disabled || buttonState === 'loading'}
        onClick={() => {onClick && onClick(); this.onClickHandler()}}
        variant={variant}
      >
        <Left>{secondaryIcon && buttonState === 'ready' && secondaryIcon}</Left>
        <Middle>
          {buttonState === 'ready' ? children : ICONS[buttonState]}
        </Middle>
        <Right />
      </StyledButton>
    );
  }
}

export default Cta;
