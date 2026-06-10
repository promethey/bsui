import { createContext, useContext } from "react";

/**
 * Carousel context used internally to share state between
 * Carousel root and its compound components.
 *
 * Provides access to carousel state such as active index
 * and navigation handlers.
 *
 * @typedef {object} CarouselContextValue
 *
 * @property {number} slidesCount
 * Total number of slides.
 *
 * @property {number} slideActive
 * Index of the currently active slide.
 *
 * @property {import("react").RefCallback<HTMLElement>} emblaRef
 * Ref callback attached to the carousel viewport.
 *
 * @property {(index: number, jump?: boolean) => void} [handleScrollTo]
 * Scrolls to a specific slide.
 */

/** @type {import("react").Context<CarouselContextValue | null>} */
export const CarouselContext = createContext(
  /** @type {CarouselContextValue | null} */ (null),
);

export function useCarouselContext() {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error(
      "Carousel components must be used within <Carousel /> context provider.",
    );
  }

  return context;
}
