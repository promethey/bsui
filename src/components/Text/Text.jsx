import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "utils/prefix";
import Prime from "@/components/Prime";
import { classnames } from "utils/classnames";

Text.propTypes = {
  /** Change JSX type */
  as: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "strong",
    "small",
    "span",
    "p",
    "div",
  ]),

  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other children components */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /** Change font size style [SHORT VERSION] */
  fs: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),

  /** Change font weight style [SHORT VERSION] */
  fw: PropTypes.oneOf([
    "bold",
    "bolder",
    "semibold",
    "normal",
    "light",
    "lighter",
  ]),

  /** Change font style */
  fst: PropTypes.oneOf(["italic", "normal"]),

  /** Change font style [SHORT VERSION] */
  fontStyle: PropTypes.oneOf(["italic", "normal"]),

  /** Change line height style [SHORT VERSION] */
  lh: PropTypes.oneOf([1, "1", "sm", "base", "lg"]),

  /** Change line height style */
  lineHeight: PropTypes.oneOf([1, "1", "sm", "base", "lg"]),

  /** Change *text* opacity style */
  textOpacity: PropTypes.oneOf([25, 50, 75]),

  /** Change *text* textAlignement style */
  textAlign: PropTypes.oneOf(["start", "center", "end"]),

  /** Change *text* textAlignement style for breakpoint sm */
  textAlignSm: PropTypes.oneOf(["start", "center", "end"]),

  /** Change *text* textAlignement style for breakpoint md */
  textAlignMd: PropTypes.oneOf(["start", "center", "end"]),

  /** Change *text* textAlignement style for breakpoint lg */
  textAlignLg: PropTypes.oneOf(["start", "center", "end"]),

  /** Change *text* textAlignement style for breakpoint xl */
  textAlignXl: PropTypes.oneOf(["start", "center", "end"]),

  /** Change *text* textTransform style */
  textTransform: PropTypes.oneOf(["lowercase", "uppercase", "capitalize"]),

  /** Change *text* decoration style */
  decoration: PropTypes.oneOf(["underline", "line-through", "none"]),

  /** Activate *text* lead style */
  lead: PropTypes.bool,

  /** Activate *text* wrap */
  wrap: PropTypes.bool,

  /** Activate *text* no wrap */
  noWrap: PropTypes.bool,

  /** Activate *text* break */
  breakWord: PropTypes.bool,

  /** Activate *text* monospace style */
  monospace: PropTypes.bool,

  /**
   * Activate *text* truncation style.
   * Truncate long strings of text with an ellipsis.
   */
  truncate: PropTypes.bool,
};

Text.defaultProps = {
  as: "p",
  style: null,
  className: null,
  fs: null,
  fontSize: null,
  fw: null,
  fontWeight: null,
  fst: null,
  fontStyle: null,
  lh: null,
  lineHeight: null,
  textOpacity: null,
  textAlign: null,
  textAlignSm: null,
  textAlignMd: null,
  textAlignLg: null,
  textAlignXl: null,
  textTransform: null,
  decoration: null,
  lead: false,
  wrap: false,
  noWrap: false,
  breakWord: false,
  monospace: false,
  truncate: false,
};

function Text(props) {
  const {
    style,
    children,
    className,

    fs,
    fontSize,

    fw,
    fontWeight,

    fst,
    fontStyle,

    lh,
    lineHeight,

    textOpacity,
    textAlign,
    textTransform,

    decoration,
    lead,

    wrap,
    noWrap,

    breakWord,

    monospace,

    truncate,
    ...rest
  } = props;

  const BASE_CLASSNAME = "text";

  let classes = classNames(
    {
      [prefix(BASE_CLASSNAME, "opacity", textOpacity)]: textOpacity !== null,
      [prefix("fs", fs)]: fs || fontSize,
      [prefix("fw", fw)]: fw || fontWeight,
      [prefix("fst", fst)]: fst || fontStyle,
      [prefix("lh", lh)]: lh || lineHeight,
      [prefix(BASE_CLASSNAME, textTransform)]: textTransform,
      [prefix(BASE_CLASSNAME, "decoration", decoration)]: decoration,
      lead,
      [prefix(BASE_CLASSNAME, "wrap")]: wrap && !noWrap,
      [prefix(BASE_CLASSNAME, "nowrap")]: noWrap && !wrap,
      [prefix(BASE_CLASSNAME, "break")]: breakWord,
      [prefix("font", "monospace")]: monospace,
      [prefix(BASE_CLASSNAME, "truncation")]: truncate,
    },
    classnames(BASE_CLASSNAME, textAlign),
    className,
  );

  if (classes === "") {
    classes = null;
  }

  return (
    <Prime style={style} className={classes} {...rest}>
      {children}
    </Prime>
  );
}

export default Text;
