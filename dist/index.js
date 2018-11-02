'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var React = require('react');
var React__default = _interopDefault(React);

var SPACING_EXTRA_LARGE = '4rem';

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var _templateObject = taggedTemplateLiteral(['\n  max-width: 80em; /* 1280px */\n'], ['\n  max-width: 80em; /* 1280px */\n']);

var MAX_WIDTH = styled.css(_templateObject);

var _templateObject$1 = taggedTemplateLiteral(['\n  padding: 0 ', ';\n  ', ';\n  margin: ', ';\n'], ['\n  padding: 0 ', ';\n  ', ';\n  margin: ', ';\n']);

var Grid = styled__default.div(_templateObject$1, SPACING_EXTRA_LARGE, MAX_WIDTH, function (_ref) {
  var margin = _ref.margin;
  return margin || '0 auto';
});

var identifyFirsts = function identifyFirsts(children) {
  var lgFirsts = [];
  var lgCount = 0;

  var mdFirsts = [];
  var mdCount = 0;

  var smFirsts = [];
  var smCount = 0;

  React.Children.forEach(children, function (c, i) {
    if (!React.isValidElement(c)) return;
    if (smCount === 0) {
      smFirsts.push(i);
    }
    if (mdCount === 0) {
      mdFirsts.push(i);
    }
    if (lgCount === 0) {
      lgFirsts.push(i);
    }
    var _c$props = c.props,
        sm = _c$props.sm,
        _c$props$smOffset = _c$props.smOffset,
        smOffset = _c$props$smOffset === undefined ? 0 : _c$props$smOffset,
        md = _c$props.md,
        _c$props$mdOffset = _c$props.mdOffset,
        mdOffset = _c$props$mdOffset === undefined ? 0 : _c$props$mdOffset,
        lg = _c$props.lg,
        _c$props$lgOffset = _c$props.lgOffset,
        lgOffset = _c$props$lgOffset === undefined ? 0 : _c$props$lgOffset;


    smCount += sm + smOffset;
    mdCount += md + mdOffset;
    lgCount += lg + lgOffset;

    smCount = smCount === 12 ? 0 : smCount;
    mdCount = mdCount === 12 ? 0 : mdCount;
    lgCount = lgCount === 12 ? 0 : lgCount;
  });

  return {
    smFirsts: smFirsts,
    mdFirsts: mdFirsts,
    lgFirsts: lgFirsts
  };
};

var GUTTER_SPACING = '.75rem';

var _templateObject$2 = taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 ', ';\n  align-items: ', ';\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 ', ';\n  align-items: ', ';\n']);

// If a column is at the beginning of a row, we want its left margin to be 0
// Because at smaller breakpoints, rows may need to wrap, we iterate through
// children to determine whether they begin a row at any breakpoint - W.P. 10/2018
var Row = function Row(_ref) {
  var children = _ref.children,
      alignItems = _ref.alignItems,
      className = _ref.className;

  var _identifyFirsts = identifyFirsts(children),
      smFirsts = _identifyFirsts.smFirsts,
      mdFirsts = _identifyFirsts.mdFirsts,
      lgFirsts = _identifyFirsts.lgFirsts;

  return React__default.createElement(
    RowStyle,
    { alignItems: alignItems, className: className },
    React.Children.map(children, function (c, i) {
      return React.cloneElement(c, {
        smFirst: smFirsts.includes(i),
        mdFirst: mdFirsts.includes(i),
        lgFirst: lgFirsts.includes(i)
      });
    })
  );
};

var RowStyle = styled__default.div(_templateObject$2, GUTTER_SPACING, function (_ref2) {
  var alignItems = _ref2.alignItems;
  return alignItems || 'flex-start';
});

var _templateObject$3 = taggedTemplateLiteral(['\n    @media (min-width: ', 'em) {\n      ', ';\n    }\n  '], ['\n    @media (min-width: ', 'em) {\n      ', ';\n    }\n  ']);

var sizes = {
  large: 1280,
  medium: 1024,
  small: 768
};

var media = Object.keys(sizes).reduce(function (acc, label) {
  acc[label] = function () {
    return styled.css(_templateObject$3, sizes[label] / 16, styled.css.apply(undefined, arguments));
  };

  return acc;
}, {});

var _templateObject$4 = taggedTemplateLiteral(['\n  flex: 0 0 auto;\n  width: ', ';\n  ', ';\n  ', ';\n  ', ';\n'], ['\n  flex: 0 0 auto;\n  width: ', ';\n  ', ';\n  ', ';\n  ', ';\n']),
    _templateObject2 = taggedTemplateLiteral(['\n    width: ', ';\n    ', ';\n  '], ['\n    width: ', ';\n    ', ';\n  ']);

var DOUBLE_GUTTER_SPACING = 'calc(2 * ' + GUTTER_SPACING + ')';
var QUADRUPLE_GUTTER_SPACING = 'calc(4 * ' + GUTTER_SPACING + ')';

var widthOfInnerMargins = 'calc(11 * ' + DOUBLE_GUTTER_SPACING + ')';
var availableWidthAfterMargins = 'calc(100% - ' + widthOfInnerMargins + ')';
var singleColumnWidth = 'calc(' + availableWidthAfterMargins + ' / 12)';

// Width of an element =
// number of columns it occupies x width of a single column + width of straddled gutters
// - W.P. 10/2018
var calculateWidth = function calculateWidth(cols) {
  return 'calc(' + cols + ' * ' + singleColumnWidth + ' + calc(' + (cols - 1) + ' * ' + DOUBLE_GUTTER_SPACING + '))';
};

var calculateMarginLeft = function calculateMarginLeft(first, offset) {
  if (offset) {
    return 'margin-left: calc(' + (first ? DOUBLE_GUTTER_SPACING : QUADRUPLE_GUTTER_SPACING) + ' + ' + calculateWidth(offset) + ')';
  }
  if (first) {
    return 'margin-left: 0';
  }
  return 'margin-left: ' + DOUBLE_GUTTER_SPACING;
};

var Col = styled__default.div(_templateObject$4, function (_ref) {
  var sm = _ref.sm;
  return calculateWidth(sm);
}, function (_ref2) {
  var smFirst = _ref2.smFirst,
      smOffset = _ref2.smOffset;
  return calculateMarginLeft(smFirst, smOffset);
}, media.medium(_templateObject2, function (_ref3) {
  var md = _ref3.md;
  return calculateWidth(md);
}, function (_ref4) {
  var mdFirst = _ref4.mdFirst,
      mdOffset = _ref4.mdOffset;
  return calculateMarginLeft(mdFirst, mdOffset);
}), media.large(_templateObject2, function (_ref5) {
  var lg = _ref5.lg;
  return calculateWidth(lg);
}, function (_ref6) {
  var lgFirst = _ref6.lgFirst,
      lgOffset = _ref6.lgOffset;
  return calculateMarginLeft(lgFirst, lgOffset);
}));

exports.Grid = Grid;
exports.Row = Row;
exports.Col = Col;
//# sourceMappingURL=index.js.map
