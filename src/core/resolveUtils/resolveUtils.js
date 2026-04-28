import classNames from "classnames";
import { classnames as cs } from "helpers";
import {
  position as positionUtility,
  spacing as spacingUtility,
  bg as bgUtility,
  text as textUtility,
  border as borderUtility,
  flex as flexUtility,
  display as dispalyUtility,
  displayPrint as displayPrintUtility,
  rounded as roundedUtility,
  shadow as shadowUtility,
  font as fontUtility,
  float as floatUtility,
  overflow as overflowUtility,
  opacity as opacityUtility,
  sizing as sizingUtility,
} from "utils";

export function resolveUtils(props) {
  const {
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

    visually,
    visible,
    invisible,
    translateMiddle,

    clearfix,

    className,
  } = props;

  const result = classNames(
    cs("translate-middle", translateMiddle),
    {
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

      [cs("visually", "hidden")]: typeof visually === "boolean" && !visually,
      [cs("visually", visually)]: typeof visually === "string",
      visible: visible && !invisible,
      invisible: invisible && !visible,
      /**
       * Clearfix utility
       * @see {@link https://getbootstrap.com/docs/5.3/helpers/clearfix/}
       */
      clearfix,
    },

    positionUtility({ pos, top, end, bottom, start }),

    sizingUtility({ w, mw, h, mh }),

    dispalyUtility(d),
    displayPrintUtility(dp),

    flexUtility(flex),

    floatUtility(float),

    spacingUtility("m", m),
    spacingUtility("p", p),

    bgUtility(bg),
    textUtility(text),
    fontUtility({ fs, fw, fst, lh, monospace }),

    opacityUtility(opacity),

    borderUtility(border),
    roundedUtility(rounded),

    shadowUtility(shadow),

    overflowUtility(overflow),

    className,
  );

  return result;
}
