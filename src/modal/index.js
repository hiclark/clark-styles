// @flow

import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import COLORS from '../constants/colors';
import SPACING from '../constants/spacing';

if (
  typeof window !== 'undefined' &&
  typeof document !== 'undefined' &&
  document.getElementById('root')
) {
  Modal.setAppElement('#root');
}

const ReactModalAdapter = ({ className, ...props }) => {
  const contentClassName = `${className}__content`;
  const overlayClassName = `${className}__overlay`;
  return (
    <Modal
      portalClassName={className}
      className={contentClassName}
      overlayClassName={overlayClassName}
      {...props}
    />
  );
};

const StyledModal = styled(ReactModalAdapter)`
  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9;
  }

  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${COLORS.WHITE};
    overflow: auto;
    border-radius: 5px;
    outline: none;
    padding: ${SPACING.S_05};
  }

  .ReactModal__Body--open {
    overflow-y: hidden;
  }
`;

export default StyledModal;
