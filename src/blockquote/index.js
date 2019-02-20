// @flow

import React from 'react';
import { Row, Col } from '../flex-grid';
import {
  Container,
  GridWrapper,
  Quote,
  Emphasis,
  Attribution,
  Image,
} from './styles';

export type PropsType = {
  firstSection: string,
  emphasis: string,
  secondSection: string,
  citation: string,
  organization: string,
  image: string,
};

const Blockquote = ({
  firstSection,
  emphasis,
  secondSection,
  citation,
  organization,
  image,
}: PropsType) => (
  <Container>
    <GridWrapper>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <Quote>
            {firstSection}
            <Emphasis> {emphasis} </Emphasis>
            {secondSection}
          </Quote>
          <Attribution> - {citation},</Attribution>
          <Attribution>{organization}</Attribution>
          <Image src={image} />
        </Col>
      </Row>
    </GridWrapper>
  </Container>
);

export default Blockquote;
