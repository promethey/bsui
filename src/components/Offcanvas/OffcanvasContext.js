import { createContext, useContext } from "react";

/**
 * Offcanvas context providing internal control API for nested components.
 * Used to manage Offcanvas lifecycle actions such as closing from child components.
 *
 * @typedef {Object} OffcanvasContextValue
 * @property {(event?: React.MouseEvent<HTMLElement>, closeType?: string) => void} [onHide]
 */

/** @type {React.Context<OffcanvasContextValue | null>} */
export const OffcanvasContext = createContext(
  /** @type {OffcanvasContextValue | null} */ (null),
);

/**
 * Hook to access Offcanvas context.
 * Must be used within an Offcanvas provider.
 *
 * @throws {Error} If used outside Offcanvas context provider.
 * @returns {OffcanvasContextValue}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
export function useOffcanvasContext() {
  const context = useContext(OffcanvasContext);

  if (!context) {
    throw new Error(
      "AccordionItem components must be used within AccordionItem.",
    );
  }

  return context;
}
