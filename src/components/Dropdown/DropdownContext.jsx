import { createContext, useContext } from "react";

/**
 * @typedef {Object} DropdownContextValue
 * @property {boolean | null} show
 * @property {() => void} onToggle
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
