import classNames from "classnames";
import { classnames as cs } from "helpers";
import { spacing as spacingUtility } from "utils/spacing";
import { bg as bgUtility } from "utils/bg";
import { text as textUtility } from "utils/text";
import { border as borderUtility } from "utils/border";
import { flex as flexUtility } from "utils/flex";
import {
  display as dispalyUtility,
  displayPrint as displayPrintUtility,
} from "utils/display";
import { rounded as roundedUtility } from "utils/rounded";
import { shadow as shadowUtility } from "utils/shadow";
import { font as fontUtility } from "utils/font";
import { float as floatUtility } from "utils/float";
import { overflow as overflowUtility } from "utils/overflow";
import { opacity as opacityUtility } from "utils/opacity";
import { sizing as sizingUtility } from "utils/sizing";

export function resolveUtilities(props) {
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
      [cs("position", pos)]: pos, // position
      [cs("top", top)]: typeof top === "number",
      [cs("end", end)]: typeof end === "number",
      [cs("bottom", bottom)]: typeof bottom === "number",
      [cs("start", start)]: typeof start === "number",

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

      [cs("visually", "hidden")]:
        typeof visually === "boolean" && !visually,
      [cs("visually", visually)]: typeof visually === "string",
      visible: visible && !invisible,
      invisible: invisible && !visible,
      /**
       * Clearfix utility
       * @see {@link https://getbootstrap.com/docs/5.3/helpers/clearfix/}
       */
      clearfix,
    },

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
