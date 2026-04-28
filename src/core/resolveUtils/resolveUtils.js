import { classnames as cs } from "helpers/classnames";
import {
  position as positionUtility,
  spacingResolver,
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
  } = props;

  return [
    spacingResolver({ m, mt, me, mb, ms, mx, my, p, pt, pe, pb, ps, px, py }),

    positionUtility({
      pos,
      top,
      end,
      bottom,
      start,
      translateMiddle,
      translateMiddleX,
      translateMiddleY,
    }),

    sizingUtility({ w, mw, h, mh }),

    dispalyUtility(d),
    displayPrintUtility(dp),

    flexUtility(flex),

    floatUtility(float),

    bgUtility(bg),

    textUtility(text),
    fontUtility({ fs, fw, fst, lh, monospace }),

    opacityUtility(opacity),

    borderUtility(border),
    roundedUtility(rounded),

    shadowUtility(shadow),

    overflowUtility(overflow),

    className,
  ]
    .join(" ")
    .trim();
}
