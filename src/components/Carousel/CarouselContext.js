import { createContext, useContext } from "react";

/**
 * Carousel context used internally to share state between
 * Carousel root and its compound components.
 *
 * Provides access to carousel state such as active index
 * and navigation handlers.
 *
 * @typedef {object} CarouselContextValue
 * @property {number} activeIndex - Currently active slide index
 * @property {(index: number | ((prev: number) => number)) => void} [onSelect] - Updates active slide index
 * @property {number} [itemsLength] - Total number of slides (optional, if provided by inner layer)
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
