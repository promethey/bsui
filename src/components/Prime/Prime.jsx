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
   * Element type used for rendering the component
   */
  as: PropTypes.elementType,

  /**
   * Accessible HTML role attribute
   */
  role: PropTypes.string,

  /**
   * Native HTML type attribute
   */
  type: PropTypes.string,

  /**
   * Disables user interaction
   */
  disabled: PropTypes.bool,

  /**
   * Callback fired when the element is clicked
   */
  onClick: PropTypes.func,

  /**
   * Navigation target URL
   */
  href: PropTypes.string,

  /**
   * Inline styles applied to the root element
   */
  style: PropTypes.shape({}),

  /**
   * Content rendered inside the component
   */
  children: PropTypes.node.isRequired,

  /**
   * Additional class names applied to the root element
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
   * Controls the display utility value for print media
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
   * Controls flexbox alignment and layout behavior
   */
  flex: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

  /**
   * Controls the CSS position utility value
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
   * Centers the element using translate transforms
   */
  translateMiddle: PropTypes.bool,

  /**
   * Centers the element horizontally using translate transforms
   */
  translateMiddleX: PropTypes.bool,

  /**
   * Centers the element vertically using translate transforms
   */
  translateMiddleY: PropTypes.bool,

  /**
   * Controls float utility behavior
   */
  float: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.oneOf(["start, end, none"]),
  ]),

  /**
   * Controls margin utility values
   */
  m: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
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
    PropTypes.shape({}),
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
  px: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),

  /**
   * Sets vertical padding utility values
   */
  py: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),

  /**
   * Controls background color utility styles and related options
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
   * Controls text color and typography utility styles
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
      width: PropTypes.oneOf([1, 2, 3, 4, 5]),
      top: PropTypes.oneOf([1, 2, 3, 4, 5]),
      end: PropTypes.oneOf([1, 2, 3, 4, 5]),
      bottom: PropTypes.oneOf([1, 2, 3, 4, 5]),
      start: PropTypes.oneOf([1, 2, 3, 4, 5]),
    }),
  ]),

  /**
   * Controls border radius and rounded utility styles
   */
  rounded: PropTypes.oneOfType([
    PropTypes.oneOf(["top", "end", "bottom", "start", "circle", "pill"]),
    PropTypes.oneOf([0, 1, 2, 3]),
    PropTypes.bool,
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
 * Core primitive component providing shared
 * rendering and polymorphic behavior across
 * the library.
 *
 * @component
 *
 * Utility systems:
 * - sizing
 * - display / displayPrint
 * - flex
 * - position
 * - float
 * - spacing
 * - background
 * - text
 * - typography
 * - opacity
 * - border
 * - rounded
 * - shadow
 * - overflow
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
 * <Prime d="flex" text="primary">
 *  Flex and primary color
 * </Prime>
 *
 * @typedef {Object} PrimeProps
 *
 * @property {React.ElementType} [as="div"]
 * Element type used for rendering the component.
 *
 * @property {string} [role]
 * Accessible HTML role attribute.
 *
 * @property {string} [type]
 * Native HTML type attribute.
 *
 * @property {boolean} [disabled=false]
 * Disables user interaction.
 *
 * @property {React.MouseEventHandler<HTMLElement>} [onClick]
 * Callback fired when the element is clicked.
 *
 * @property {string} [href]
 * Navigation target URL.
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
 * @property {boolean} [translateMiddle=false]
 * Centers the element using translate transforms.
 *
 * @property {boolean} [translateMiddleX=false]
 * Centers the element horizontally using translate transforms.
 *
 * @property {boolean} [translateMiddleY=false]
 * Centers the element vertically using translate transforms.
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
 * @property {BorderObject|true|"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"|"white"|1|2|3|4|5} [border]
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
 * @param {PrimeProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 *
 * @type {React.ForwardRefExoticComponent<PrimeProps & React.RefAttributes<any>>}
 */
const Prime = React.forwardRef((props, ref) => {
  const {
    as: ComponentType = "div",
    role,
    type,
    disabled = false,
    onClick,
    href,
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
    monospace = false,
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
      role={role}
      type={type}
      disabled={disabled}
      onClick={onClick}
      href={href}
      style={style}
      className={classes ? classes : null}
      {...rest}>
      {children}
    </ComponentType>
  );
});

Prime.propTypes = propTypes;

Prime.displayName = "Prime";

export default React.memo(Prime);
