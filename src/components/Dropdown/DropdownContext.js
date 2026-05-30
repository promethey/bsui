import { createContext, useContext } from "react";

/**
 * @typedef {Object} DropdownContextValue
 *
 * @property {boolean} expanded
 * Controls the visibility state of the dropdown menu.
 *
 * @property {import("@floating-ui/react").ExtendedRefs<Element>} refs
 * Floating UI reference and floating element refs.
 *
 * @property {React.CSSProperties} floatingStyles
 * Floating UI computed positioning styles.
 *
 * @property {(userProps?: Object) => Object} getReferenceProps
 *
 * @property {(userProps?: Object) => Object} getFloatingProps
 */

/** @type {React.Context<DropdownContextValue | null>} */
export const DropdownContext = createContext(
  /** @type {DropdownContextValue | null} */ (null),
);

export function useDropdownContext() {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error(
      "AccordionItem components must be used within AccordionItem.",
    );
  }

  return context;
}
