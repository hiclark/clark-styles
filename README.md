# Clark Styles
---
Clark style and pattern library

[![NPM](https://img.shields.io/npm/v/clark-styles.svg)](https://www.npmjs.com/package/clark-styles)

### Getting Started

- You will need to install [Yarn](https://yarnpkg.com/en/docs/install) for dependency management, if you do not have it already installed.

- Run the `yarn` command to install `node_modules`

### Testing library integration locally

To test clark-styles locally, run `yarn build`. **Make sure `build/` directory exists** and then follow the instructions [here](https://yarnpkg.com/lang/en/docs/cli/link/).

### Testing

We use [jest](https://facebook.github.io/jest/) for running our test suite. All new utility functions should be pure and thoroughly unit-tested. Run `yarn test` to start the test runner

### Flow

This project uses `flow` to do static typechecking. We're using the [flowtype](https://github.com/gajus/eslint-plugin-flowtype) eslint plugin to enforce adding flow annotations to all files and stylistic consistency.

Run `yarn flow` to start the flow server. If you run into unexpected failures, as a first troubleshooting step, run `yarn flow stop` and then start the server again to bust the cache.

### Updating

For convience sake, we use the [cut-release](https://github.com/bjoerge/cut-release) project to easily publish to npm and follow SEMVER. **Don't forget to update the changelog!**

**Once you have cut a release remember to bump the version in your project.**

### Usage

To use the library run `yarn add clark-styles`.

```jsx
import React from 'react'

import { Grid, Col, Row, COLORS, SPACING } from 'clark-styles'
import styled from 'styled-components'

const StyledCol = styled(Col)`
  background: ${COLORS.CLARK_PRIMARY};
  height: ${SPACING.S_4};
  margin-top: ${SPACING.S_1};
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

### Dependencies

`BreadcrumbsHeader` component has introduced two additional dependencies `lodash` and `react-router-dom`. We may choose to refactor and decouple these dependencies at a later time but for now this works best within our system.

### License

MIT © [hiclark](https://github.com/hiclark)
