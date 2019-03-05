// @flow

import React, { Component } from 'react';
import { ButtonWrap, Left, Middle, Right, StyledButton } from './styles';
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
    const { children, disabled, secondaryIcon, variant } = this.props;

    return (
      <ButtonWrap onClick={this.onClickHandler}>
        <StyledButton
          disabled={disabled || buttonState === 'loading'}
          variant={variant}
        >
          <Left>
            {secondaryIcon && buttonState === 'ready' && secondaryIcon}
          </Left>
          <Middle>
            {buttonState === 'ready' ? children : ICONS[buttonState]}
          </Middle>
          <Right />
        </StyledButton>
      </ButtonWrap>
    );
  }
}

export default Cta;
