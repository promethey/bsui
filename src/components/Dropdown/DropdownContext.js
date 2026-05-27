import { createContext, useContext } from "react";

/**
 * @typedef {Object} DropdownContextValue
 *
 * @property {boolean} expanded
 * Controls the visibility state of the dropdown menu.
 *
 * @property {React.RefObject<HTMLDivElement | null>} dropdownRef
 * Reference to the root dropdown element.
 *
 * @property {() => void} onToggle
 * Toggles the dropdown visibility state.
 *
 * @property {() => void} onClose
 * Closes the dropdown menu.
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
