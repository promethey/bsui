import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "utils/prefix";
import { classnames as cs } from "utils/classnames";
import { spacing as spacingUtility } from "utils/spacing";
import { background as backgroundUtility } from "utils/background";
import { text as textUtility } from "utils/text";
import { border as borderUtility } from 'utils/border';
import { flex as flexUtility } from 'utils/flex';

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

  flex: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

  float: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.oneOf(["start, end, none"]),
  ]),

  shadow: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["sm", "lg"])]),

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

  visually: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(["hidden", "hidden-focusable"]),
  ]),

  visible: PropTypes.bool,
  invisible: PropTypes.bool,
  clearfix: PropTypes.bool,
  translateMiddle: PropTypes.bool,
  overflow: PropTypes.oneOf(["auto", "hidden", "visible", "scroll"]),
};

const defaultProps = {
  as: "div",
  style: null,
  className: null,
  d: null,
  dp: null, // display print
  w: null,
  mw: null, // max width
  h: null,
  mh: null, // max height
  pos: null, // position
  top: null,
  end: null,
  bottom: null,
  start: null,
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
  flex: null,
  shadow: null,
  bg: null, // background
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
 *
 * @example
 * <Box>This is box component</Box>
 * <Box d={bs.d.inlineBlock}>This is inline-block box component</Box>
 * <Box textColor="primary" d="flex">Flex and primary color</Box>
 * <Box textColor={bs.text.colors.primary} d={bs.d.flex}>Flex and primary color</Box>

 * @return {JSX.Element} Box
 * 
 * @todo
 * - create rounded util
 * - create mx, my, mt, me, mb, ms etc. util
 * - create position top, end, bottom, start util
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
const Prime = React.forwardRef((props, ref) => {
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
    mx,
    my,
    mt,
    me,
    mb,
    ms,
    p, // padding
    px,
    py,
    pt,
    pe,
    pb,
    ps,

    fs, // font style
    fw, // font weight
    fst, // font style
    lh, // line height
    monospace,

    flex,

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
      [prefix("top", top)]: typeof top === 'number',
      [prefix("end", end)]: typeof end === 'number',
      [prefix("bottom", bottom)]: typeof bottom === 'number',
      [prefix("start", start)]: typeof start === 'number',
      [prefix("opacity", opacity)]: opacity,
      [prefix("shadow", shadow)]: shadow,
      [cs("mx", mx)]: mx,
      [cs("my", my)]: my,
      [cs("mt", mt)]: mt,
      [cs("me", me)]: me,
      [cs("mb", mb)]: mb,
      [cs("ms", ms)]: ms,
      [cs("px", px)]: px,
      [cs("py", py)]: py,
      [cs("pt", pt)]: pt,
      [cs("pe", pe)]: pe,
      [cs("pb", pb)]: pb,
      [cs("ps", ps)]: ps,
      [cs("rounded", rounded)]: rounded,
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
    flexUtility(flex),
    cs("d", d),
    cs("d-print", dp),
    cs("float", float),
    cs("translate-middle", translateMiddle),
    className,
  );

  return (
    <Component ref={ref} style={style} className={classes === "" ? null : classes} {...rest}>
      {children}
    </Component>
  );
});

Prime.propTypes = propTypes;
Prime.defaultProps = defaultProps;

export default Prime;
