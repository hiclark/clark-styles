// @flow

import React from 'react';
import { Grid, Row, Col } from '../flex-grid';
import {
  HeaderWrapper,
  Content,
  Logo,
  PhoneIcon,
  ContactInfoItem,
  PhoneLink,
} from './styles';

const Header = () => (
  <HeaderWrapper>
    <Grid alignItems="center">
      <Row>
        <Col sm={12} md={12} lg={12}>
          <Content>
            <Logo />
            <PhoneIcon />
            <div>
              <ContactInfoItem isFirst>
                Questions? Call us at{' '}
                <PhoneLink href="tel:1-929-443-1055">929-443-1055</PhoneLink>
              </ContactInfoItem>
              <ContactInfoItem>Monday-Friday, 10 am - 6 pm EST</ContactInfoItem>
            </div>
          </Content>
        </Col>
      </Row>
    </Grid>
  </HeaderWrapper>
);

export default Header;
