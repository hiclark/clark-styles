// @flow

import React, { Component, type Node } from 'react';

import { Container, StyledPopover, StyledTrigger } from './styles';

type PassedInPropsType = {
  content: Node,
  position?: string,
  tipPosition?: string,
  trigger: Node,
  width?: string,
};

type StateType = { isOpen: boolean };

const Trigger = ({ trigger, onClick }) => (
  <StyledTrigger onClick={onClick}>{trigger}</StyledTrigger>
);

const Popover = ({ content, position, tipPosition, width, visible }) => (
  <StyledPopover
    width={width}
    visible={visible}
    tipPosition={tipPosition}
    position={position}
  >
    {content}
  </StyledPopover>
);

class ToolTip extends Component<PassedInPropsType, StateType> {
  state = { isOpen: false };

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <Container>
        <Trigger onClick={this.toggle} {...this.props} />
        <Popover visible={isOpen} {...this.props} />
      </Container>
    );
  }
}

export default ToolTip;
