import styled, { css } from 'styled-components';
import React, { Children, isValidElement, cloneElement } from 'react';

const CLARK_PRIMARY = '#ea4900';

const CLARK_SECONDARY = '#00cbc4';

const CLARK_TERTIARY = '#feaf38';

const BLACK_100 = '#413e60';

const DARK_GRAY_75 = '#716f88';

const GRAY_50 = '#a09eaf';

const GRAY_25 = '#cfcfd7';

const LIGHT_GRAY_10 = '#ecebef';

const OFF_WHITE_3 = '#f9f9fa';

const WHITE = '#ffffff';

const COLORS = {
  CLARK_PRIMARY,
  CLARK_SECONDARY,
  CLARK_TERTIARY,
  BLACK_100,
  DARK_GRAY_75,
  GRAY_50,
  GRAY_25,
  LIGHT_GRAY_10,
  OFF_WHITE_3,
  WHITE
};

const MAX_WIDTH = css`
  max-width: 80em; /* 1280px */
`;

const sizes = {
  large: 1280,
  medium: 1024,
  small: 768
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

const NONE = '0';
const EXTRA_SMALL = '.25rem';
const SMALL = '.5rem';
const MEDIUM = '1rem';
const LARGE = '2rem';
const EXTRA_LARGE = '4rem';
const EXTRA_EXTRA_LARGE = '8rem';
const EXTRA_EXTRA_EXTRA_LARGE = '16rem';

const SPACING = {
  NONE,
  EXTRA_SMALL,
  SMALL,
  MEDIUM,
  LARGE,
  EXTRA_LARGE,
  EXTRA_EXTRA_LARGE,
  EXTRA_EXTRA_EXTRA_LARGE
};

const Grid = styled.div`
  padding: 0 ${SPACING.EXTRA_LARGE};
  ${MAX_WIDTH};
  margin: ${({ margin }) => margin || '0 auto'};
`;

const identifyFirsts = children => {
  const lgFirsts = [];
  let lgCount = 0;

  const mdFirsts = [];
  let mdCount = 0;

  const smFirsts = [];
  let smCount = 0;

  Children.forEach(children, (c, i) => {
    if (!isValidElement(c)) return;
    if (smCount === 0) {
      smFirsts.push(i);
    }
    if (mdCount === 0) {
      mdFirsts.push(i);
    }
    if (lgCount === 0) {
      lgFirsts.push(i);
    }
    const { sm, smOffset = 0, md, mdOffset = 0, lg, lgOffset = 0 } = c.props;

    smCount += sm + smOffset;
    mdCount += md + mdOffset;
    lgCount += lg + lgOffset;

    smCount = smCount === 12 ? 0 : smCount;
    mdCount = mdCount === 12 ? 0 : mdCount;
    lgCount = lgCount === 12 ? 0 : lgCount;
  });

  return {
    smFirsts,
    mdFirsts,
    lgFirsts
  };
};

const GUTTER_SPACING = '.75rem';

// If a column is at the beginning of a row, we want its left margin to be 0
// Because at smaller breakpoints, rows may need to wrap, we iterate through
// children to determine whether they begin a row at any breakpoint - W.P. 10/2018
const Row = ({ children, alignItems, className }) => {
  const { smFirsts, mdFirsts, lgFirsts } = identifyFirsts(children);

  return React.createElement(
    RowStyle,
    { alignItems: alignItems, className: className },
    Children.map(children, (c, i) => cloneElement(c, {
      smFirst: smFirsts.includes(i),
      mdFirst: mdFirsts.includes(i),
      lgFirst: lgFirsts.includes(i)
    }))
  );
};

const RowStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 ${GUTTER_SPACING};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
`;

const DOUBLE_GUTTER_SPACING = `calc(2 * ${GUTTER_SPACING})`;
const QUADRUPLE_GUTTER_SPACING = `calc(4 * ${GUTTER_SPACING})`;

const widthOfInnerMargins = `calc(11 * ${DOUBLE_GUTTER_SPACING})`;
const availableWidthAfterMargins = `calc(100% - ${widthOfInnerMargins})`;
const singleColumnWidth = `calc(${availableWidthAfterMargins} / 12)`;

// Width of an element =
// number of columns it occupies x width of a single column + width of straddled gutters
// - W.P. 10/2018
const calculateWidth = cols => `calc(${cols} * ${singleColumnWidth} + calc(${cols - 1} * ${DOUBLE_GUTTER_SPACING}))`;

const calculateMarginLeft = (first, offset) => {
  if (offset) {
    return `margin-left: calc(${first ? DOUBLE_GUTTER_SPACING : QUADRUPLE_GUTTER_SPACING} + ${calculateWidth(offset)})`;
  }
  if (first) {
    return `margin-left: 0`;
  }
  return `margin-left: ${DOUBLE_GUTTER_SPACING}`;
};

const Col = styled.div`
  flex: 0 0 auto;
  width: ${({ sm }) => calculateWidth(sm)};
  ${({ smFirst, smOffset }) => calculateMarginLeft(smFirst, smOffset)};
  ${media.medium`
    width: ${({ md }) => calculateWidth(md)};
    ${({ mdFirst, mdOffset }) => calculateMarginLeft(mdFirst, mdOffset)};
  `};
  ${media.large`
    width: ${({ lg }) => calculateWidth(lg)};
    ${({ lgFirst, lgOffset }) => calculateMarginLeft(lgFirst, lgOffset)};
  `};
`;

export { COLORS, MAX_WIDTH, media as MEDIA, SPACING, Grid, Row, Col };
//# sourceMappingURL=index.es.js.map
