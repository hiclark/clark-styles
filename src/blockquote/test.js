// @flow

import React from 'react';
import Blockquote, { type PropsType } from '.';

const setup = () => {
  const props: PropsType = {
    firstSection: '',
    emphasis: '',
    secondSection: '',
    citation: '',
    organization: '',
    image: '',
  };

  const wrapper = shallow(<Blockquote {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<Blockquote />', () => {
  it('renders', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
