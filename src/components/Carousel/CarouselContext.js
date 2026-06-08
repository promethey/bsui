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
 * @property {number} [itemsCount] - Total number of slides (optional, if provided by inner layer)
 * @property {(index: number) => void} [handleControlClick] - Updates active slide index
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
