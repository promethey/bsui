import React from "react";
import PropTypes from "prop-types";

import {
  bgResolver,
  borderResolver,
  displayResolver,
  displayPrintResolver,
  flexResolver,
  fontResolver,
  opacityResolver,
  overflowResolver,
  positionResolver,
  roundedResolver,
  shadowResolver,
  sizingResolver,
  spacingResolver,
  textResolver,
  floatResolver,
} from "utils";

const propTypes = {
  /**
   * Element type used for rendering
   * the component
   */
  as: PropTypes.elementType,

  /**
   * Inline styles applied
   * to the root element
   */
  style: PropTypes.shape({}),

  /**
   * Content rendered inside
   * the component
   */
  children: PropTypes.node.isRequired,

  /**
   * Additional class names applied
   * to the root element
   */
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * Sets the width utility value
   */
  w: PropTypes.oneOf([0, 25, 50, 75, 100, "auto"]),

  /**
   * Sets the max-width utility value
   */
  mw: PropTypes.oneOf([0, 25, 50, 75, 100, "auto"]),

  /**
   * Sets the height utility value
   */
  h: PropTypes.oneOf([0, 25, 50, 75, 100, "auto"]),

  /**
   * Sets the max-height utility value
   */
  mh: PropTypes.oneOf([0, 25, 50, 75, 100, "auto"]),

  /**
   * Controls the CSS display utility value
   */
  d: PropTypes.oneOfType([
    PropTypes.oneOf([
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
    PropTypes.shape({
      xs: PropTypes.oneOf([
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
      sm: PropTypes.oneOf([
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
      md: PropTypes.oneOf([
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
      lg: PropTypes.oneOf([
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
      xl: PropTypes.oneOf([
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
    }),
  ]),

  /**
   * Controls the display utility
   * value for print media
   */
  dp: PropTypes.oneOfType([
    PropTypes.oneOf([
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
    PropTypes.shape({
      xs: PropTypes.oneOf([
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
      sm: PropTypes.oneOf([
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
      md: PropTypes.oneOf([
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
      lg: PropTypes.oneOf([
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
      xl: PropTypes.oneOf([
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
    }),
  ]),

  /**
   * Controls flexbox alignment
   * and layout behavior
   */
  flex: PropTypes.oneOfType([
    PropTypes.oneOf(["start", "end", "center"]),
    PropTypes.shape({
      direction: PropTypes.oneOf([
        "row",
        "row-reverse",
        "column",
        "column-reverse",
      ]),
      justifyContent: PropTypes.oneOf([
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
      ]),
      alignItems: PropTypes.oneOf([
        "start",
        "end",
        "center",
        "baseline",
        "stretch",
      ]),
      alignSelf: PropTypes.oneOf([
        "start",
        "end",
        "center",
        "baseline",
        "stretch",
      ]),
      fill: PropTypes.bool,
      grow: PropTypes.oneOf([0, 1]),
      shrink: PropTypes.oneOf([0, 1]),
      wrap: PropTypes.bool,
      nowrap: PropTypes.bool,
      wrapReverse: PropTypes.bool,
      order: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, "first", "last"]),
      alignContent: PropTypes.oneOf([
        "start",
        "end",
        "center",
        "between",
        "around",
        "stretch",
      ]),
    }),
  ]),

  /**
   * Controls the CSS position
   * utility value
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
   * Sets the top offset utility value
   */
  top: PropTypes.oneOf([0, 50, 100]),

  /**
   * Sets the end (right) offset utility value
   */
  end: PropTypes.oneOf([0, 50, 100]),

  /**
   * Sets the bottom offset utility value
   */
  bottom: PropTypes.oneOf([0, 50, 100]),

  /**
   * Sets the start (left) offset utility value
   */
  start: PropTypes.oneOf([0, 50, 100]),

  /**
   * Centers the element using
   * translate transforms
   */
  translate: PropTypes.oneOf(["middle", "middle-x", "middle-y"]),

  /**
   * Controls float utility behavior.
   */
  float: PropTypes.oneOfType([
    PropTypes.oneOf(["start", "end", "none"]),
    PropTypes.shape({
      xs: PropTypes.oneOf(["start", "end", "none"]),
      sm: PropTypes.oneOf(["start", "end", "none"]),
      md: PropTypes.oneOf(["start", "end", "none"]),
      lg: PropTypes.oneOf(["start", "end", "none"]),
      xl: PropTypes.oneOf(["start", "end", "none"]),
      xxl: PropTypes.oneOf(["start", "end", "none"]),
    }),
  ]),

  /**
   * Controls margin utility values.
   */
  m: PropTypes.oneOfType([
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
    PropTypes.shape({
      xs: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
      sm: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
      md: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
      lg: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
      xl: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
      xxl: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
    }),
  ]),

  /**
   * Sets the top margin utility value
   */
  mt: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),

  /**
   * Sets the end (right) margin utility value
   */
  me: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),

  /**
   * Sets the bottom margin utility value
   */
  mb: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),

  /**
   * Sets the start (left) margin utility value
   */
  ms: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),

  /**
   * Sets horizontal margin utility values
   */
  mx: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),

  /**
   * Sets vertical margin utility values
   */
  my: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),

  /**
   * Controls padding utility values
   */
  p: PropTypes.oneOfType([
    PropTypes.shape({
      xs: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
      sm: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
      md: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
      lg: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
      xl: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
      xxl: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
    }),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /**
   * Sets the top padding utility value
   */
  pt: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),

  /**
   * Sets the end (right) padding utility value
   */
  pe: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),

  /**
   * Sets the bottom padding utility value
   */
  pb: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),

  /**
   * Sets the start (left) padding utility value
   */
  ps: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),

  /**
   * Sets horizontal padding utility values
   */
  px: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),

  /**
   * Sets vertical padding utility values
   */
  py: PropTypes.oneOf([0, 1, 2, 3, 4, 5, "auto"]),

  /**
   * Controls background color utility
   * styles and related options
   */
  bg: PropTypes.oneOfType([
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
  ]),

  /**
   * Controls text color and
   * typography utility styles
   */
  text: PropTypes.oneOfType([
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
        PropTypes.oneOf(["start", "center", "end"]),
        PropTypes.shape({
          xs: PropTypes.oneOf(["start", "center", "end"]),
          sm: PropTypes.oneOf(["start", "center", "end"]),
          md: PropTypes.oneOf(["start", "center", "end"]),
          lg: PropTypes.oneOf(["start", "center", "end"]),
          xl: PropTypes.oneOf(["start", "center", "end"]),
        }),
      ]),
      wordBreak: PropTypes.bool,
      transform: PropTypes.oneOf(["lowercase", "uppercase", "capitalize"]),
      decoration: PropTypes.oneOf(["underline", "line-through", "none"]),
      wrap: PropTypes.bool,
      nowrap: PropTypes.bool,
      select: PropTypes.oneOf(["all", "auto", "none"]),
    }),
  ]),

  /**
   * Controls the font size utility value
   */
  fs: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),

  /**
   * Controls the font weight utility value
   */
  fw: PropTypes.oneOf(["bold", "bolder", "normal", "light", "lighter"]),

  /**
   * Controls the font style utility value
   */
  fst: PropTypes.oneOf(["italic", "normal"]),

  /**
   * Controls the line-height utility value
   */
  lh: PropTypes.oneOf([1, "sm", "base", "lg"]),

  /**
   * Enables monospace font styling
   */
  monospace: PropTypes.bool,

  /**
   * Controls the opacity utility value
   */
  opacity: PropTypes.oneOf([25, 50, 75, 100]),

  /**
   * Controls border utility styles and border appearance
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
      width: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
      top: PropTypes.oneOf([true, 0]),
      end: PropTypes.oneOf([true, 0]),
      bottom: PropTypes.oneOf([true, 0]),
      start: PropTypes.oneOf([true, 0]),
    }),
  ]),

  /**
   * Controls border radius and
   * rounded utility styles
   */
  rounded: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(["top", "end", "bottom", "start", "circle", "pill"]),
    PropTypes.oneOf([0, 1, 2, 3]),
  ]),

  /**
   * Applies shadow utility styles
   */
  shadow: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["sm", "lg"])]),

  /**
   * Controls overflow utility behavior
   */
  overflow: PropTypes.oneOf(["auto", "hidden", "visible", "scroll"]),
};

/**
 * @typedef {import("../../utils/display").DisplayObject} DisplayObject
 * @typedef {import("../../utils/flex").FlexObject} FlexObject
 * @typedef {import("../../utils/flex").FlexBreakpointsObject} FlexBreakpointsObject
 * @typedef {import("../../utils/flex").FlexBreakpointsShort} FlexBreakpointsShort
 * @typedef {import("../../utils/float").FloatObject} FloatObject
 * @typedef {import("../../utils/spacing").SpacingObject} SpacingObject
 * @typedef {import("../../utils/spacing").SpacingArray} SpacingArray
 * @typedef {import("../../utils/spacing").SpacingValues} SpacingValues
 * @typedef {import("../../utils/bg").BackgroundObject} BackgroundObject
 * @typedef {import("../../utils/text").TextObject} TextObject
 * @typedef {import("../../utils/border").BorderObject} BorderObject
 */

/**
 * Core primitive component that provides the foundational
 * layer for implementing Bootstrap-style utility behavior
 * across the entire component library.
 *
 * @component
 *
 * Utility systems:
 * - bg
 * - border
 * - display/displayPrint
 * - flex
 * - float
 * - font
 * - opacity
 * - overflow
 * - position
 * - rounded
 * - shadow
 * - sizing
 * - spacing
 * - text
 *
 * @example
 * <Prime>
 *  This is Prime component
 * </Prime>
 *
 * @example
 * <Prime d="inline-block">
 *  This is inline-block Prime component
 * </Prime>
 *
 * @example
 * <Prime text="primary">
 *  Primary text color
 * </Prime>
 *
 * @typedef {Object} PrimeProps
 *
 * @property {React.ElementType} [as="div"]
 * Element type used for rendering the component.
 *
 * @property {React.CSSProperties} [style]
 * Inline styles applied to the root element.
 *
 * @property {React.ReactNode} [children]
 * Content rendered inside the component.
 *
 * @property {string|Object} [className]
 * Additional class names applied to the root element.
 *
 * @property {25|50|75|100|"auto"} [w]
 * Sets the width utility value.
 *
 * @property {25|50|75|100|"auto"} [mw]
 * Sets the max-width utility value.
 *
 * @property {25|50|75|100|"auto"} [h]
 * Sets the height utility value.
 *
 * @property {25|50|75|100|"auto"} [mh]
 * Sets the max-height utility value.
 *
 * @property {DisplayObject|"none"|"inline"|"inline-block"|"block"|"grid"|"inline-grid"|"table"|"table-cell"|"table-row"|"flex"|"inline-flex"} [d]
 * Controls the CSS display utility value.
 *
 * @property {DisplayObject|"none"|"inline"|"inline-block"|"block"|"grid"|"inline-grid"|"table"|"table-cell"|"table-row"|"flex"|"inline-flex"} [dp]
 * Controls the display utility value for print media.
 *
 * @property {FlexObject|FlexBreakpointsObject|FlexBreakpointsShort|"start"|"end"|"center"} [flex]
 * Controls flexbox alignment and layout behavior.
 *
 * @property {"static"|"relative"|"absolute"|"fixed"|"sticky"} [pos]
 * Controls the CSS position utility value.
 *
 * @property {0|50|100} [top]
 * Sets the top offset utility value.
 *
 * @property {0|50|100} [end]
 * Sets the end (right) offset utility value.
 *
 * @property {0|50|100} [bottom]
 * Sets the bottom offset utility value.
 *
 * @property {0|50|100} [start]
 * Sets the start (left) offset utility value.
 *
 * @property {"middle"|"middle-x"|"middle-y"} [translate]
 * Centers the element using translate transforms.
 *
 * @property {FloatObject|"start"|"end"|"none"} [float]
 * Controls float utility behavior.
 *
 * @property {SpacingObject|SpacingArray|SpacingValues} [m]
 * Controls margin utility values.
 *
 * @property {SpacingObject|SpacingValues} [mt]
 * Sets the top margin utility value.
 *
 * @property {SpacingObject|SpacingValues} [me]
 * Sets the end (right) margin utility value.
 *
 * @property {SpacingObject|SpacingValues} [mb]
 * Sets the bottom margin utility value.
 *
 * @property {SpacingObject|SpacingValues} [ms]
 * Sets the start (left) margin utility value.
 *
 * @property {SpacingObject|SpacingValues} [mx]
 * Sets horizontal margin utility values.
 *
 * @property {SpacingObject|SpacingValues} [my]
 * Sets vertical margin utility values.
 *
 * @property {SpacingObject|SpacingArray|SpacingValues} [p]
 * Controls padding utility values.
 *
 * @property {SpacingObject|SpacingValues} [pt]
 * Sets the top padding utility value.
 *
 * @property {SpacingObject|SpacingValues} [pe]
 * Sets the end (right) padding utility value.
 *
 * @property {SpacingObject|SpacingValues} [pb]
 * Sets the bottom padding utility value.
 *
 * @property {SpacingObject|SpacingValues} [ps]
 * Sets the start (left) padding utility value.
 *
 * @property {SpacingObject|SpacingValues} [px]
 * Sets horizontal padding utility values.
 *
 * @property {SpacingObject|SpacingValues} [py]
 * Sets vertical padding utility values.
 *
 * @property {BackgroundObject|"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"|"body"|"white"|"transparent"} [bg]
 * Controls background color utility styles and related options.
 *
 * @property {TextObject|"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"|"body"|"muted"|"white"|"black-50"|"white-50"|"reset"} [text]
 * Controls text color and typography utility styles.
 *
 * @property {1|2|3|4|5|6} [fs]
 * Controls the font size utility value.
 *
 * @property {"bold"|"bolder"|"normal"|"light"|"lighter"} [fw]
 * Controls the font weight utility value.
 *
 * @property {"italic"|"normal"} [fst]
 * Controls the font style utility value.
 *
 * @property {1|"sm"|"base"|"lg"} [lh]
 * Controls the line-height utility value.
 *
 * @property {boolean} [monospace=false]
 * Enables monospace font styling.
 *
 * @property {25|50|75|100} [opacity]
 * Controls the opacity utility value.
 *
 * @property {BorderObject|true|"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"|"white"|0|1|2|3|4|5} [border]
 * Controls border utility styles and border appearance.
 *
 * @property {boolean|"top"|"end"|"bottom"|"start"|"circle"|"pill"|0|1|2|3} [rounded]
 * Controls border radius and rounded utility styles.
 *
 * @property {true|"none"|"sm"|"lg"} [shadow]
 * Applies shadow utility styles.
 *
 * @property {"auto"|"hidden"|"visible"|"scroll"} [overflow]
 * Controls overflow utility behavior.
 *
 * @param {PrimeProps & Record<string, any>} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function Prime(props) {
  const {
    as: Component = "div",
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
    translate,
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
    monospace = false,
    opacity,
    border,
    rounded,
    shadow,
    overflow,
    ...rest
  } = props;

  const classes = [
    className,
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
      translate,
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
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  return (
    <Component style={style} className={classes || undefined} {...rest}>
      {children}
    </Component>
  );
}

Prime.propTypes = propTypes;

Prime.displayName = "Prime";

export default React.memo(Prime);
