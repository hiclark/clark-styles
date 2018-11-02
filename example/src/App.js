import React from 'react'

import {Grid, Row, Col, COLORS, SPACING} from 'clark-styles'
import styled from 'styled-components'

const App = () => (
  <Grid>
    <Row>
      <StyledCol sm={12} md={12} lg={12}></StyledCol>
    </Row>
    <Row>
      <StyledCol sm={12} md={6} lg={6}></StyledCol>
      <StyledCol sm={12} md={6} lg={6}></StyledCol>
    </Row>
    <Row>
      <StyledCol sm={3} md={3} lg={3}></StyledCol>
      <StyledCol sm={3} md={3} lg={3}></StyledCol>
      <StyledCol sm={3} md={3} lg={3}></StyledCol>
      <StyledCol sm={3} md={3} lg={3}></StyledCol>
    </Row>
    <Row>
      <StyledCol sm={3} md={3} lg={3} lgOffset={6}></StyledCol>
      <StyledCol sm={3} md={3} lg={3}></StyledCol>
    </Row>
  </Grid>
);

export default App;

const StyledCol = styled(Col)`
  background: ${COLORS.CLARK_PRIMARY};
  height: ${SPACING.EXTRA_LARGE};
  margin-top: ${SPACING.MEDIUM};
`;
