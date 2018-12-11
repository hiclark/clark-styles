// @flow

import React, { Component, type Node } from 'react';
import { type LocationShape } from 'react-router-dom';

import Spinner from '../spinner';
import SPACING from '../constants/spacing';
import Check from '../assets/icons/check.svg';

import {
  Container,
  Label,
  SecondaryIcon,
  StyledButton,
  StyledLink,
} from './styles';

type StyleType = 'dashed' | 'primary' | 'secondary' | 'tertiary';
type ButtonType = 'button' | 'reset' | 'submit';

type PropsType = {
  children: Node,
  disabled?: boolean,
  icon?: Node,
  margin?: string,
  onClick?: () => void,
  path?: string | LocationShape,
  dialog: boolean,
  styleType?: StyleType,
  type?: ButtonType,
};

type StateType = {
  btnState: string,
  btnLabel: Node,
};

const labelMap = activeState =>
  activeState === 'loading' ? <Spinner size={SPACING.S_2} /> : <Check />;

const getBtnProps = activeState => ({
  btnState: activeState,
  btnLabel: labelMap(activeState),
});

class Button extends Component<PropsType, StateType> {
  static defaultProps = {
    disabled: false,
    icon: null,
    margin: null,
    onClick: () => {},
    path: null,
    dialog: null,
    styleType: 'primary',
    type: 'submit',
  };

  state = {
    btnState: 'active',
    btnLabel: null,
  };

  componentDidMount() {
    const { children } = this.props;
    this.setState({ btnLabel: children });
  }

  componentWillUpdate(_, nextState) {
    if (nextState.btnState === 'loading') {
      const nextBtnState = getBtnProps('success');

      setTimeout(() => this.setState({ ...nextBtnState }), 1000);
    }
  }

  handleClick = () => {
    const { onClick, dialog } = this.props;

    if (dialog) {
      const nextBtnState = getBtnProps('loading');
      this.setState({ ...nextBtnState }, () => {
        if (onClick) onClick();
      });
    }
  };

  render() {
    const {
      disabled,
      icon,
      margin,
      path,
      styleType,
      type,
      dialog,
    } = this.props;
    const { btnLabel, btnState } = this.state;

    return (
      <Container>
        {path ? (
          <StyledLink
            disabled={disabled}
            icon={icon}
            margin={margin}
            styleType={styleType}
            to={path}
            dialog={dialog}
          >
            {icon && (
              <SecondaryIcon btnState={btnState} dialog={dialog}>
                {icon}
              </SecondaryIcon>
            )}
            <Label hasSecondaryIcon={icon}>{btnLabel}</Label>
          </StyledLink>
        ) : (
          <StyledButton
            btnState={btnState}
            disabled={btnState === 'loading' || disabled}
            icon={icon}
            margin={margin}
            onClick={this.handleClick}
            styleType={styleType}
            type={type}
            dialog={dialog}
          >
            {icon && (
              <SecondaryIcon btnState={btnState} dialog={dialog}>
                {icon}
              </SecondaryIcon>
            )}
            <Label hasSecondaryIcon={icon}>{btnLabel}</Label>
          </StyledButton>
        )}
      </Container>
    );
  }
}

export default Button;
