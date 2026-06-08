import { Children, isValidElement } from "react";
import CarouselInner from "./CarouselInner";

/**
 * Finds Carousel.Inner component among carousel children.
 *
 * @param {import("react").ReactNode} children
 * @returns {import("react").ReactElement}
 *
 * @throws {Error} If Carousel.Inner is not found
 */
export default function findCarouselInner(children) {
  const inner = Children.toArray(children).find(
    (child) => isValidElement(child) && child.type === CarouselInner,
  );

  if (!inner) {
    throw new Error("Carousel requires a Carousel.Inner component.");
  }

  return /** @type {import("react").ReactElement} */ (inner);
}
