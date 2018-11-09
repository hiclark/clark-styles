// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import flatMap from 'lodash/flatMap';
import styled from 'styled-components';

import { Grid, Row, Col } from '../flex-grid';
import SPACING from '../constants/spacing';
import TYPE_SCALE from '../constants/type-scale';
import BORDER_WIDTH from '../constants/border-width';
import COLORS from '../constants/colors';
import FONT_WEIGHT from '../constants/font-weight';

type LinkType = {
  path: string,
  displayName: string,
};

type PropsType = {
  title?: string,
  breadcrumbs: LinkType[],
};

const renderLinks = (breadcrumbs: LinkType[]) =>
  breadcrumbs.length === 1
    ? flatMap(
        // $FlowFixMe: lodash flatmap type error
        breadcrumbs,
        ({ path, displayName }: LinkType) => [
          <Separator key={`separator-${path}`}>{' < '}</Separator>,
          <StyledLink to={path} key={`link-${path}`}>
            {displayName}
          </StyledLink>,
        ],
      )
    : flatMap(
        // $FlowFixMe: lodash flatmap type error
        breadcrumbs,
        ({ path, displayName }: LinkType, index, array) =>
          array.length - 1 === index
            ? [
                <StyledLink to={path} key={`link-${path}`}>
                  {' '}
                  {displayName}
                </StyledLink>,
              ]
            : [
                <StyledLink to={path} key={`link-${path}`}>
                  {' '}
                  {displayName}
                </StyledLink>,
                <Separator key={`separator-${path}`}> {' > '}</Separator>,
              ],
      );

const BreadcrumbsHeader = ({ title, breadcrumbs }: PropsType) => (
  <HeaderWrapper>
    <Grid>
      <Row alignItems="center">
        <Col sm={3} md={3} lg={3}>
          {renderLinks(breadcrumbs)}
        </Col>
        <Col sm={6} md={6} lg={6}>
          <Headline>{title}</Headline>
        </Col>
        <Col sm={3} md={3} lg={3} />
      </Row>
    </Grid>
  </HeaderWrapper>
);

export default BreadcrumbsHeader;

const { GREY_100, GREY_10, WHITE } = COLORS;
const { TS_2, TS_5 } = TYPE_SCALE;
const { BW_1 } = BORDER_WIDTH;
const { FW_700, FW_400 } = FONT_WEIGHT;

const HeaderWrapper = styled.div`
  align-items: center;
  background: ${WHITE};
  border-bottom: solid ${BW_1} ${GREY_10};
  display: flex;
  height: 80px;
`;

const StyledLink = styled(Link)`
  ${FW_700};
  color: ${GREY_100};
  text-decoration: none;
`;

const Separator = styled.span`
  ${TS_5};
  color: ${GREY_100};
`;

const Headline = styled.h1`
  ${FW_400};
  ${TS_2};
  color: ${GREY_100};
`;
