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

  setIsSubmitting = () => {
    const { loadingTime } = this.props;
    return setTimeout(() => {
      this.setState({ buttonState: 'confirmed' });
    }, loadingTime);
  };

  setIsLoading = () =>
    this.setState({ buttonState: 'loading' }, () => {
      this.setIsSubmitting();
    });

  onClickHandler = () => {
    const { onClick } = this.props;
    if (onClick) {
      this.setIsLoading();
      return onClick();
    }

    return this.setIsLoading();
  };

  render() {
    const { buttonState } = this.state;
    const { children, disabled, secondaryIcon, variant } = this.props;

    return (
      <StyledButton
        disabled={disabled || buttonState === 'loading'}
        onClick={this.onClickHandler}
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
