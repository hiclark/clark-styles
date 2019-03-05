// @flow

import React, { Component } from 'react';
import { Icon, Left, Middle, Spacer, StyledButton } from './styles';
import SPACING from '../constants/spacing';
import Check from '../assets/icons/check.svg';
import Spinner from '../spinner';

const { S_05, S_1 } = SPACING;
const ICON_SIZE = `calc(${S_05} + ${S_1})`;

const ICONS = {
  confirmed: <Check />,
  loading: <Spinner size={ICON_SIZE} />,
};

class Cta extends Component<*, *> {
  state = { buttonState: 'ready' };

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
    const { loadingTime, onClick } = this.props;
    if (loadingTime) {
      this.setIsLoading();
      return onClick();
    }

    return onClick();
  };

  render() {
    const { buttonState } = this.state;
    const { children, disabled, margin, secondaryIcon, variant } = this.props;

    return (
      <StyledButton
        disabled={disabled || buttonState === 'loading'}
        margin={margin}
        onClick={this.onClickHandler}
        variant={variant}
      >
        <Left>{secondaryIcon && buttonState === 'ready' && secondaryIcon}</Left>
        <Middle>
          {buttonState === 'ready' ? (
            children
          ) : (
            <Icon
              isOutline={variant === 'outline' && buttonState === 'confirmed'}
            >
              {ICONS[buttonState]}
            </Icon>
          )}
        </Middle>
        <Spacer />
      </StyledButton>
    );
  }
}

export default Cta;
