// @flow
import React from 'react';
import flatMap from 'lodash/flatMap';

import { Grid, Row, Col } from '../flex-grid';
import { Header, StyledLink, Separator, Headline } from './styles';

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
  <Header>
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
  </Header>
);

export default BreadcrumbsHeader;
