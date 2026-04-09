import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "utils/prefix";
import { classnames as cs } from "utils/classnames";
import { spacing as spacingUtility } from "utils/spacing";
import { background as backgroundUtility } from "utils/background";
import { text as textUtility } from "utils/text";
import { border as borderUtility } from 'utils/border';

const propTypes = {
  as: PropTypes.oneOf([
    "div",
    "span",
    "a",
    "button",
    "input",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "strong",
    "small",
    "p",
    "form",
    "ul",
    "ol",
    "select",
    "label",
  ]),
  style: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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

  // width
  w: PropTypes.oneOf([0, 25, 50, 75, 100, "auto"]),
  mw: PropTypes.oneOf([0, 25, 50, 75, 100, "auto"]),

  // height
  h: PropTypes.oneOf([0, 25, 50, 75, 100, "auto"]),
  mh: PropTypes.oneOf([0, 25, 50, 75, 100, "auto"]),

  // position
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

  // margin
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

  // padding
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

  // float
  float: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.oneOf(["start, end, none"]),
  ]),

  // opacity
  opacity: PropTypes.oneOf([25, 50, 75, 100]),

  // shadow
  shadow: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["sm", "lg"])]),

  // background color
  // bg="primary" bg={{color: "primary", gradient: true, opacity: 10}}
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

  // text
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
      break: PropTypes.bool,
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

  // font
  font: PropTypes.shape({
    size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    weight: PropTypes.oneOf(["bold", "bolder", "normal", "light", "lighter"]),
    style: PropTypes.oneOf(["italic", "normal"]),
  }),

  // border
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
    })
  ]),

  // visually
  visually: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(["hidden", "hidden-focusable"]),
  ]),

  // visible|unvisible
  visible: PropTypes.bool,
  invisible: PropTypes.bool,

  // clearfix
  clearfix: PropTypes.bool,

  // translate middle
  translateMiddle: PropTypes.bool,

  // overflow
  overflow: PropTypes.oneOf(["auto", "hidden", "visible", "scroll"]),
};

const defaultProps = {
  as: "div",
  style: null,
  className: null,
  d: null,
  dp: null,
  w: null,
  mw: null,
  h: null,
  mh: null,
  pos: null,
  top: null,
  end: null,
  bottom: null,
  start: null,
  m: null,
  mx: null,
  my: null,
  mt: null,
  me: null,
  mb: null,
  ms: null,
  p: null,
  px: null,
  py: null,
  pt: null,
  pe: null,
  pb: null,
  ps: null,
  opacity: null,
  shadow: null,
  bg: null,
  text: null,
  border: false,
  visually: null,
  visible: false,
  invisible: false,
  clearfix: false,
  translateMiddle: false,
  overflow: null,
};

/**
 * Box component is basic for this library
 * @component
 *
 * @example
 * <Box>This is box component</Box>
 * <Box d={bs.d.inlineBlock}>This is inline-block box component</Box>
 *
 * @example
 * <Box textColor="primary" d="flex">Flex and primary color</Box>
 * <Box textColor={bs.text.colors.primary} d={bs.d.flex}>Flex and primary color</Box>
 *
 * @typedef {Object} BoxProps
 * @property {('div'|'span'|'a'|'button'|'input'|'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'strong'|'small'|'p'|'form'|'ul'|'ol'|'select'|'label')} [as="div"] - Change component type
 * @property {React.ReactNode} [children=null] - Add children components
 * @property {React.CSSProperty} [style=null] - Add other CSS syles
 * @property {Object|Array<string>|string} [className=null] - Add other class names
 * @property {('none'|'inline'|'inline-block'|'block'|'grid'|'table'|'table-cell'|'table-row'|'flex'|'inline-flex')} [d=null] - Display utility
 * @property {('none'|'inline'|'inline-block'|'block'|'grid'|'table'|'table-cell'|'table-row'|'flex'|'inline-flex')} [dp=null] - Display print utility
 * @property {(0|25|50|75|100|'auto')} [w=null] - Width utility
 * @property {(0|25|50|75|100|'auto')} [mw=null] - Max width utility
 * @property {(0|25|50|75|100|'auto')} [h=null] - Height utility
 * @property {(0|25|50|75|100|'auto')} [mh=null] - Max height utility
 * @property {('static'|'relative'|'absolute'|'fixed'|'fixed-top'|'fixed-bottom'|'sticky'|'sticky-top')} [pos=null] - Position utility
 * @property {(0|50|100)} [top=null] - Position top utility
 * @property {(0|50|100)} [end=null] - Position end utility
 * @property {(0|50|100)} [bottom=null] - Position bottom utility
 * @property {(0|50|100)} [start=null] - Position start utility
 * @property {Object|(0|1|2|3|4|5)} [m=null] - Margin utility
 * @property {Object|(0|1|2|3|4|5)} [mx=null] - Margin axis X utility
 * @property {Object|(0|1|2|3|4|5)} [my=null] - Margin axis Y utility
 * @property {Object|(0|1|2|3|4|5)} [mt=null] - Margin top utility
 * @property {Object|(0|1|2|3|4|5)} [me=null] - Margin end utility
 * @property {Object|(0|1|2|3|4|5)} [mb=null] - Margin bottom utility
 * @property {Object|(0|1|2|3|4|5)} [ms=null] - Margin start utility
 * @property {Object|(0|1|2|3|4|5)} [p=null] - Padding utility
 * @property {Object|(0|1|2|3|4|5)} [px=null] - Padding axis X utility
 * @property {Object|(0|1|2|3|4|5)} [py=null] - Padding axis Y utility
 * @property {Object|(0|1|2|3|4|5)} [pt=null] - Padding top utility
 * @property {Object|(0|1|2|3|4|5)} [pe=null] - Padding end utility
 * @property {Object|(0|1|2|3|4|5)} [pb=null] - Padding bottom utility
 * @property {Object|(0|1|2|3|4|5)} [ps=null] - Padding start utility
 * @property {Object|('start'|'end'|'none')} [float=null] - Float utility
 * @property {25|50|75|100} [opacity=null] - Opacity utility
 * @property {boolean|('sm'|'lg')} [shadow=null] - Shadow utility
 * @property {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'|'body'|'white'|'transparent' | { color?: 'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'|'body'|'white'|'transparent', gradient?: boolean, opacity?: 10|25|50|75 })} [bg=null] - Background utility
 *
 * @param {BoxProps} props
 * @return {JSX.Element} Box
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
const Box = React.forwardRef((props, ref) => {
  const {
    as: Component = "div",
    style,
    children,
    className,
    d,
    dp, // display print
    w,
    mw, // max width
    h,
    mh, // max height
    pos, // position
    top,
    end,
    bottom,
    start,
    m, // margin
    p, // padding
    float,
    opacity,
    shadow,
    bg,
    text,
    border,
    rounded,
    visually,
    visible,
    invisible,
    clearfix,
    translateMiddle,
    overflow,
    ...rest
  } = props;

  const classes = classNames(
    {
      [prefix("w", w)]: w,
      [prefix("mw", mw)]: mw, // max width
      [prefix("h", h)]: h,
      [prefix("mh", mh)]: mh, // max height
      [prefix("position", pos)]: pos, // position
      [prefix("top", top)]: top,
      [prefix("end", end)]: end,
      [prefix("bottom", bottom)]: bottom,
      [prefix("start", start)]: start,
      [prefix("opacity", opacity)]: opacity,
      [prefix("shadow", shadow)]: shadow,
      [prefix("rounded", rounded)]: rounded,
      [prefix("visually", "hidden")]:
        typeof visually === "boolean" && !visually,
      [prefix("visually", visually)]: typeof visually === "string",
      [prefix("overflow", overflow)]: overflow,
      visible: visible && !invisible,
      invisible: invisible && !visible,
      /**
       * Clearfix utility
       * @see {@link https://getbootstrap.com/docs/5.3/helpers/clearfix/}
       */
      clearfix,
    },
    backgroundUtility(bg),
    textUtility(text),
    spacingUtility("m", m),
    spacingUtility("p", p),
    borderUtility(border),
    cs("d", d),
    cs("d-print", dp),
    cs("float", float),
    cs("translate-middle", translateMiddle),
    className,
  );

  return (
    <Component ref={ref} style={style} className={classes} {...rest}>
      {children}
    </Component>
  );
});

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

export default Box;
