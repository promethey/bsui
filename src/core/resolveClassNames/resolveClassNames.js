import { prefix } from "helpers/prefix";
import { classnames as cs } from "helpers/classnames";
import classNames from "classnames";
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
import { overflow as overflowUtility } from 'utils/overflow';

export function resolveClassNames(props) {
  const {
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

    fs,
    fw,
    fst,
    lh,
    monospace,

    flex,

    float,

    shadow,

    bg,
    text,
    opacity,
    border,
    rounded,

    visually,
    visible,
    invisible,
    translateMiddle,
    overflow,

    clearfix,

    className,
  } = props;

  const result = classNames(
    cs("translate-middle", translateMiddle),
    {
      [prefix("w", w)]: w,
      [prefix("mw", mw)]: mw, // max width

      [prefix("h", h)]: h,
      [prefix("mh", mh)]: mh, // max height

      [prefix("position", pos)]: pos, // position
      [prefix("top", top)]: typeof top === "number",
      [prefix("end", end)]: typeof end === "number",
      [prefix("bottom", bottom)]: typeof bottom === "number",
      [prefix("start", start)]: typeof start === "number",

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

      [cs("opacity", opacity)]: opacity,

      [prefix("visually", "hidden")]:
        typeof visually === "boolean" && !visually,
      [prefix("visually", visually)]: typeof visually === "string",
      visible: visible && !invisible,
      invisible: invisible && !visible,
      /**
       * Clearfix utility
       * @see {@link https://getbootstrap.com/docs/5.3/helpers/clearfix/}
       */
      clearfix,
    },

    dispalyUtility(d),
    displayPrintUtility(dp),
    bgUtility(bg),
    textUtility(text),
    fontUtility({ fs, fw, fst, lh, monospace }),
    spacingUtility("m", m),
    spacingUtility("p", p),
    borderUtility(border),
    roundedUtility(rounded),
    flexUtility(flex),
    shadowUtility(shadow),
    floatUtility(float),
    overflowUtility(overflow),

    className,
  );

  return result;
}
