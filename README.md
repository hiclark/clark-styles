# clark-styles

> Shared styles for clark frontends

[![NPM](https://img.shields.io/npm/v/clark-styles.svg)](https://www.npmjs.com/package/clark-styles)

## Install

```bash
yarn add clark-styles
```

## Usage

```jsx
import React from 'react'

import { Grid, Col, Row, COLORS, SPACING } from 'clark-styles'
import styled from 'styled-components'

const StyledCol = styled(Col)`
  background: ${COLORS.CLARK_PRIMARY};
  height: ${SPACING.EXTRA_LARGE};
  margin-top: ${SPACING.MEDIUM};
`;

const App = () => (
  <Grid>
    <Row>
      <StyledCol sm={12} md={12} lg={12} />
    </Row>
    <Row>
      <StyledCol sm={12} md={6} lg={6} />
      <StyledCol sm={12} md={6} lg={6} />
    </Row>
    <Row>
      <StyledCol sm={3} md={3} lg={3} />
      <StyledCol sm={3} md={3} lg={3} />
      <StyledCol sm={3} md={3} lg={3} />
      <StyledCol sm={3} md={3} lg={3} />
    </Row>
    <Row>
      <StyledCol sm={3} md={3} lg={3} lgOffset={6}></StyledCol>
      <StyledCol sm={3} md={3} lg={3}></StyledCol>
    </Row>
  </Grid>
);
```

## License

MIT © [hiclark](https://github.com/hiclark)
