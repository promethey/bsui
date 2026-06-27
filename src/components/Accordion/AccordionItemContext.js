import { useContext, createContext } from "react";

/**
 * @typedef {Object} AccordionItemContextValue
 *
 * @property {boolean} expanded
 * Indicates whether the accordion item
 * is currently expanded.
 *
 * @property {() => void} toggle
 * Toggles the expanded state
 * of the accordion item.
 */

/** @type {React.Context<AccordionItemContextValue | null>} */
export const AccordionItemContext = createContext(
  /** @type {AccordionItemContextValue | null} */ (null),
);

export const useAccordionItemContext = () => {
  const context = useContext(AccordionItemContext);

  if (!context) {
    throw new Error(
      "AccordionItem components must be used within AccordionItem.",
    );
  }

  return context;
};
