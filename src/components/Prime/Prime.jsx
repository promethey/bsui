import React from "react";
import PropTypes from "prop-types";
import { classnames as cs } from "helpers/classnames";
import {
  position as positionResolver,
  spacingResolver,
  bg as bgResolver,
  text as textResolver,
  border as borderResolver,
  flex as flexResolver,
  display as dispalyResolver,
  displayPrint as displayPrintResolver,
  rounded as roundedResolver,
  shadow as shadowResolver,
  font as fontResolver,
  float as floatResolver,
  overflow as overflowResolver,
  opacity as opacityResolver,
  sizing as sizingResolver,
} from "utils";

const propTypes = {
  as: PropTypes.elementType,
  style: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  w: PropTypes.oneOf([0, 25, 50, 75, 100, "auto"]),
  mw: PropTypes.oneOf([0, 25, 50, 75, 100, "auto"]),
  h: PropTypes.oneOf([0, 25, 50, 75, 100, "auto"]),
  mh: PropTypes.oneOf([0, 25, 50, 75, 100, "auto"]),
  d: PropTypes.oneOf([
    "none",
    "inline",
    "inline-block",
    "block",
    "grid",
    "table",
    "table-cell",
    "table-row",
    "flex",
    "inline-flex",
  ]),
  dp: PropTypes.oneOf([
    "none",
    "inline",
    "inline-block",
    "block",
    "grid",
    "table",
    "table-cell",
    "table-row",
    "flex",
    "inline-flex",
  ]),
  flex: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  pos: PropTypes.oneOf([
    "static",
    "relative",
    "absolute",
    "fixed",
    "fixed-top",
    "fixed-bottom",
    "sticky",
    "sticky-top",
  ]),
  top: PropTypes.oneOf([0, 50, 100]),
  end: PropTypes.oneOf([0, 50, 100]),
  bottom: PropTypes.oneOf([0, 50, 100]),
  start: PropTypes.oneOf([0, 50, 100]),
  translateMiddle: PropTypes.bool,
  translateMiddleX: PropTypes.bool,
  translateMiddleY: PropTypes.bool,
  float: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.oneOf(["start, end, none"]),
  ]),
  m: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),
  mx: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),
  my: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),
  mt: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),
  me: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),
  mb: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),
  ms: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),
  p: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),
  px: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  py: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  pt: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),
  pe: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),
  pb: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),
  ps: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),
  bg: PropTypes.oneOfType([
    PropTypes.shape({
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
        "body",
        "white",
        "transparent",
      ]),
      gradient: PropTypes.boolean,
      opacity: PropTypes.oneOf([10, 25, 50, 75]),
    }),
    PropTypes.oneOf([
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
      "light",
      "dark",
      "body",
      "white",
      "transparent",
    ]),
  ]),
  text: PropTypes.oneOfType([
    PropTypes.shape({
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
        "body",
        "muted",
        "white",
        "black-50",
        "white-50",
        "reset",
      ]),
      align: PropTypes.oneOfType([
        PropTypes.shape({
          xs: PropTypes.oneOf(["start", "center", "end"]),
          sm: PropTypes.oneOf(["start", "center", "end"]),
          md: PropTypes.oneOf(["start", "center", "end"]),
          lg: PropTypes.oneOf(["start", "center", "end"]),
          xl: PropTypes.oneOf(["start", "center", "end"]),
        }),
        PropTypes.oneOf(["start", "center", "end"]),
      ]),
      wordBreak: PropTypes.bool,
      transform: PropTypes.oneOf(["lowercase", "uppercase", "capitalize"]),
      decoration: PropTypes.oneOf(["underline", "line-through", "none"]),
    }),
    PropTypes.oneOf([
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
      "light",
      "dark",
      "body",
      "muted",
      "white",
      "black-50",
      "white-50",
      "reset",
    ]),
  ]),
  fs: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  fw: PropTypes.oneOf(["bold", "bolder", "normal", "light", "lighter"]),
  fst: PropTypes.oneOf(["italic", "normal"]),
  lh: PropTypes.oneOf([1, "sm", "base", "lg"]),
  monospace: PropTypes.bool,
  opacity: PropTypes.oneOf([25, 50, 75, 100]),
  border: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
        "white",
      ]),
      width: PropTypes.oneOf([1, 2, 3, 4, 5]),
      top: PropTypes.oneOf([1, 2, 3, 4, 5]),
      end: PropTypes.oneOf([1, 2, 3, 4, 5]),
      bottom: PropTypes.oneOf([1, 2, 3, 4, 5]),
      start: PropTypes.oneOf([1, 2, 3, 4, 5]),
    }),
  ]),
  rounded: PropTypes.oneOfType([
    PropTypes.oneOf(["top", "end", "bottom", "start", "circle", "pill"]),
    PropTypes.oneOf([0, 1, 2, 3]),
    PropTypes.object,
  ]),
  shadow: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["sm", "lg"])]),
  overflow: PropTypes.oneOf(["auto", "hidden", "visible", "scroll"]),
};

const defaultProps = {
  as: "div",
  style: null,
  className: null,
  w: null,
  mw: null, // max width
  h: null,
  mh: null, // max height
  d: null,
  dp: null, // display print
  flex: null,
  pos: null, // position
  top: null,
  end: null,
  bottom: null,
  start: null,
  translateMiddle: false,
  translateMiddleX: false,
  translateMiddleY: false,
  float: null,
  m: null, // margin
  mx: null,
  my: null,
  mt: null,
  me: null,
  mb: null,
  ms: null,
  p: null, // padding
  px: null,
  py: null,
  pt: null,
  pe: null,
  pb: null,
  ps: null,
  bg: null, // background
  text: null,
  fs: null,
  fw: null,
  fst: null,
  lh: null,
  monospace: false,
  opacity: null,
  border: false,
  rounded: null,
  shadow: null,
  overflow: null,
};

/**
 * Prime component is basic for this library
 * 
 * Support helpers:
 * + prefix
 * + classnames
 * 
 * Support utils:
 * + sizing
 * + display
 * + displayPrint
 * + flex
 * + position
 * + float
 * + spacing
 * + bg
 * + text
 * + font
 * + opacity
 * + border
 * + rounded
 * + shadow
 * + overflow
 *
 * @example
 * <Prime>This is Prime component</Prime>
 * <Prime d="inline-block">This is inline-block Prime component</Prime>
 * <Prime d="flex" text="primary">Flex and primary color</Prime>

 * @return {JSX.Element} Prime
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
const Prime = React.forwardRef((props, ref) => {
  const {
    as: Component = "div",
    style,
    children,
    w,
    mw, // max width
    h,
    mh, // max height
    d,
    dp,
    flex,
    pos, // position
    top,
    end,
    bottom,
    start,
    translateMiddle,
    translateMiddleX,
    translateMiddleY,
    float,
    m,
    mx,
    my,
    mt,
    me,
    mb,
    ms,
    p,
    px,
    py,
    pt,
    pe,
    pb,
    ps,
    bg,
    text,
    fs,
    fw,
    fst,
    lh,
    monospace,
    opacity,
    border,
    rounded,
    shadow,
    overflow,
    className,
    ...rest
  } = props;

  const classes = [
    sizingResolver({ w, mw, h, mh }),
    dispalyResolver(d),
    displayPrintResolver(dp),
    flexResolver(flex),
    positionResolver({
      pos,
      top,
      end,
      bottom,
      start,
      translateMiddle,
      translateMiddleX,
      translateMiddleY,
    }),
    floatResolver(float),
    spacingResolver({
      m,
      mt,
      me,
      mb,
      ms,
      mx,
      my,
      p,
      pt,
      pe,
      pb,
      ps,
      px,
      py,
    }),
    bgResolver(bg),
    textResolver(text),
    fontResolver({ fs, fw, fst, lh, monospace }),
    opacityResolver(opacity),
    borderResolver(border),
    roundedResolver(rounded),
    shadowResolver(shadow),
    overflowResolver(overflow),
    className,
  ]
    .join(" ")
    .trim();

  return (
    <Component
      ref={ref}
      style={style}
      className={classes ? classes : null}
      {...rest}>
      {children}
    </Component>
  );
});

Prime.propTypes = propTypes;
Prime.defaultProps = defaultProps;

export default Prime;
