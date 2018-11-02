// @flow
import { Children, isValidElement, type Node } from 'react';

export const identifyFirsts = (children: Node) => {
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
    lgFirsts,
  };
};

export default identifyFirsts;
