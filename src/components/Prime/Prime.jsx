import React from "react";
import PropTypes from "prop-types";
import {
  position as positionResolver,
  spacingResolver,
  bgResolver,
  text as textResolver,
  border as borderResolver,
  flexResolver,
  displayResolver,
  displayPrintResolver,
  rounded as roundedResolver,
  shadow as shadowResolver,
  font as fontResolver,
  floatResolver,
  overflow as overflowResolver,
  opacity as opacityResolver,
  sizing as sizingResolver,
} from "utils";

const propTypes = {
  /**
   * HTML element type used for rendering
   */
  as: PropTypes.elementType,

  /**
   * Inline styles applied to the root
   */
  style: PropTypes.shape({}),

  /**
   * Content rendered inside the component
   */
  children: PropTypes.node.isRequired,

  /**
   * Additional classes applied to the root element
   */
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * Sets width
   */
  w: PropTypes.oneOf([0, 25, 50, 75, 100, "auto"]),

  /**
   * Sets max-width
   */
  mw: PropTypes.oneOf([0, 25, 50, 75, 100, "auto"]),

  /**
   * Sets height
   */
  h: PropTypes.oneOf([0, 25, 50, 75, 100, "auto"]),

  /**
   * Sets max-height
   */
  mh: PropTypes.oneOf([0, 25, 50, 75, 100, "auto"]),

  /**
   * Controls CSS display property
   */
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

  /**
   * Controls display property for print media
   */
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

  /**
   * Controls flexbox behavior
   */
  flex: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

  /**
   * Sets position type
   */
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

  /**
   * Sets top offset
   */
  top: PropTypes.oneOf([0, 50, 100]),

  /**
   * Sets end (right) offset
   */
  end: PropTypes.oneOf([0, 50, 100]),

  /**
   * Sets bottom offset
   */
  bottom: PropTypes.oneOf([0, 50, 100]),

  /**
   * Sets start (left) offset
   */
  start: PropTypes.oneOf([0, 50, 100]),

  /**
   * Centers element using translate
   */
  translateMiddle: PropTypes.bool,

  /**
   * Centers element using translate axis-x
   */
  translateMiddleX: PropTypes.bool,

  /**
   * Centers element using translate axis-y
   */
  translateMiddleY: PropTypes.bool,

  /**
   * Controls float behavior
   */
  float: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.oneOf(["start, end, none"]),
  ]),

  /**
   * Sets margins
   */
  m: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /**
   * Sets top margin
   */
  mt: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),

  /**
   * Sets end (right) margin
   */
  me: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),

  /**
   * Sets bottom margin
   */
  mb: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),

  /**
   * Sets start (left) margin
   */
  ms: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),

  /**
   * Sets horizontal margin
   */
  mx: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),

  /**
   * Sets vertical margin
   */
  my: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),

  /**
   * Sets paddings
   */
  p: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /**
   * Sets top padding
   */
  pt: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),

  /**
   * Sets end (right) padding
   */
  pe: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),

  /**
   * Sets bottom padding
   */
  pb: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),

  /**
   * Sets start (left) padding
   */
  ps: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),

  /**
   * Sets horizontal padding
   */
  px: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),

  /**
   * Sets vertical padding
   */
  py: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),

  /**
   * Sets background color and related options
   */
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
      gradient: PropTypes.bool,
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

  /**
   * Controls test styles
   */
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

  /**
   * Sets font size
   */
  fs: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),

  /**
   * Sets font weight
   */
  fw: PropTypes.oneOf(["bold", "bolder", "normal", "light", "lighter"]),

  /**
   * Sets font styles
   */
  fst: PropTypes.oneOf(["italic", "normal"]),

  /**
   * Sets line height
   */
  lh: PropTypes.oneOf([1, "sm", "base", "lg"]),

  /**
   * Enabled monospace font
   */
  monospace: PropTypes.bool,

  /**
   * Sets opacity level
   */
  opacity: PropTypes.oneOf([25, 50, 75, 100]),

  /**
   * Controls border styles
   */
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

  /**
   * Controls border radius
   */
  rounded: PropTypes.oneOfType([
    PropTypes.oneOf(["top", "end", "bottom", "start", "circle", "pill"]),
    PropTypes.oneOf([0, 1, 2, 3]),
    PropTypes.bool,
  ]),

  /**
   * Applies shadow
   */
  shadow: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["sm", "lg"])]),

  /**
   * Controls overflow behavior
   */
  overflow: PropTypes.oneOf(["auto", "hidden", "visible", "scroll"]),
};

/**
 * @typedef {import("../../utils/display/display").DisplayObject} DisplayObject
 * @typedef {import("../../utils/flex/flex").FlexObject} FlexObject
 * @typedef {import("../../utils/flex/flex").FlexBreakpointsObject} FlexBreakpointsObject
 * @typedef {import("../../utils/flex/flex").FlexBreakpointsShort} FlexBreakpointsShort
 * @typedef {import("../../utils/float/float").FloatObject} FloatObject
 * @typedef {import("../../utils/spacing/spacing").SpacingObject} SpacingObject
 * @typedef {import("../../utils/spacing/spacing").SpacingArray} SpacingArray
 * @typedef {import("../../utils/spacing/spacing").SpacingValues} SpacingValues
 * @typedef {import("../../utils/bg/bg").BackgroundObject} BackgroundObject
 * @typedef {import("../../utils/text/text").TextObject} TextObject
 * @typedef {import("../../utils/border/border").BorderObject} BorderObject
 */

/**
 * Prime component is basic for this library
 * @component
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
 *
 * @example
 * <Prime d="inline-block">
 *  This is inline-block Prime component
 * </Prime>
 *
 * @example
 * <Prime d="flex" text="primary">
 *  Flex and primary color
 * </Prime>
 *
 * @typedef {Object} PrimeProps
 * @property {React.ElementType} [as="div"] - HTML element type used for rendering.
 * @property {Object} [style] - Inline styles applied to the root.
 * @property {React.ReactNode} [children] - Content rendered inside the component.
 * @property {Object|string} [className] - Additional classes applied to the root element.
 *
 * @property {25|50|75|100|"auto"} [w] - Sets width.
 * @property {25|50|75|100|"auto"} [mw] - Sets max-width.
 * @property {25|50|75|100|"auto"} [h] - Sets height.
 * @property {25|50|75|100|"auto"} [mh] - Sets max-height.
 *
 * @property {DisplayObject|"none"|"inline"|"inline-block"|"block"|"grid"|"inline-grid"|"table"|"table-cell"|"table-row"|"flex"|"inline-flex"} [d] - Controls CSS display property.
 * @property {DisplayObject|"none"|"inline"|"inline-block"|"block"|"grid"|"inline-grid"|"table"|"table-cell"|"table-row"|"flex"|"inline-flex"} [dp] - Controls display property for print media.
 *
 * @property {FlexObject|FlexBreakpointsObject|FlexBreakpointsShort|"start"|"end"|"center"} [flex] - Controls flexbox behavior.
 *
 * @property {"static"|"relative"|"absolute"|"fixed"|"sticky"} [pos] - Sets position type.
 * @property {0|50|100} [top] - Sets top offset.
 * @property {0|50|100} [end] - Sets end (right) offset.
 * @property {0|50|100} [bottom] - Sets bottom offset.
 * @property {0|50|100} [start] - Sets start (left) offset.
 * @property {boolean} [translateMiddle=false] - Centers element using translate.
 * @property {boolean} [translateMiddleX=false] - Centers element using translate axis-x.
 * @property {boolean} [translateMiddleY=false] - Centers element using translate axis-y.
 *
 * @property {FloatObject|"start"|"end"|"none"} [float] - Controls float behavior.
 *
 * @property {SpacingObject|SpacingArray|SpacingValues} [m] - Sets margins.
 * @property {SpacingObject|SpacingValues} [mt] - Sets top margin.
 * @property {SpacingObject|SpacingValues} [me] - Sets end (right) margin.
 * @property {SpacingObject|SpacingValues} [mb] - Sets bottom margin.
 * @property {SpacingObject|SpacingValues} [ms] - Sets start (left) margin.
 * @property {SpacingObject|SpacingValues} [mx] - Sets horizontal margin.
 * @property {SpacingObject|SpacingValues} [my] - Sets vertical margin.
 *
 * @property {SpacingObject|SpacingArray|SpacingValues} [p] - Sets paddings.
 * @property {SpacingObject|SpacingValues} [pt] - Sets top padding.
 * @property {SpacingObject|SpacingValues} [pe] - Sets end (right) padding.
 * @property {SpacingObject|SpacingValues} [pb] - Sets bottom padding.
 * @property {SpacingObject|SpacingValues} [ps] - Sets start (left) padding.
 * @property {SpacingObject|SpacingValues} [px] - Sets horizontal padding.
 * @property {SpacingObject|SpacingValues} [py] - Sets vertical padding.
 *
 * @property {BackgroundObject|"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"|"body"|"white"|"transparent"} [bg] - Sets background color and related options.
 *
 * @property {TextObject|"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"|"body"|"muted"|"white"|"black-50"|"white-50"|"reset"} [text] - Controls test styles.
 *
 * @property {1|2|3|4|5|6} [fs] - Sets font size.
 * @property {"bold"|"bolder"|"normal"|"light"|"lighter"} [fw] - Sets font weight.
 * @property {"italic"|"normal"} [fst] - Sets font styles.
 * @property {1|"sm"|"base"|"lg"} [lh] - Sets line height.
 * @property {boolean} [monospace] - Enabled monospace font.
 *
 * @property {25|50|75|100} [opacity] - Sets opacity level.
 *
 * @property {BorderObject|"top"|"end"|"bottom"|"start"|1|2|3|4|5} [border] - Controls border styles.
 * @property {boolean|"top"|"end"|"bottom"|"start"|"circle"|"pill"|0|1|2|3} [rounded] - Controls border radius.
 *
 * @property {true|"none"|"sm"|"lg"} [shadow] - Applies shadow.
 *
 * @property {"auto"|"hidden"|"visible"|"scroll"} [overflow] - Controls overflow behavior.
 *
 * @param {PrimeProps} props
 *
 * @return {JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 *
 * @type {React.ForwardRefExoticComponent<PrimeProps & React.RefAttributes<HTMLElement>>}
 */
const Prime = React.forwardRef((props, ref) => {
  const {
    as: ComponentType = "div",
    style,
    children,
    className,
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
    ...rest
  } = props;

  const classes = [
    sizingResolver({ w, mw, h, mh }),
    displayResolver(d),
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
    <ComponentType
      ref={ref}
      style={style}
      className={classes ? classes : null}
      {...rest}>
      {children}
    </ComponentType>
  );
});

Prime.propTypes = propTypes;

export default Prime;
