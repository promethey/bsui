import { createContext, useContext } from "react";

/**
 * @typedef {Object} NavbarContextValue
 * @property {boolean} expanded
 * @property {() => void} toggle
 */

/** @type {React.Context<NavbarContextValue | null>} */
export const NavbarContext = createContext(
  /** @type {NavbarContextValue | null} */ (null),
);

export function useNavbarContext() {
  const context = useContext(NavbarContext);

  if (!context) {
    throw new Error(
      "AccordionItem components must be used within AccordionItem.",
    );
  }

  return context;
}
