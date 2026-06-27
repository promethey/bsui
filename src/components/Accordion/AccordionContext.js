import { createContext, useContext } from "react";

/**
 * @typedef {Object} AccordionContextValue
 *
 * @property {React.Dispatch<React.SetStateAction<string | string[] | undefined>>} setActiveKey
 * Updates the currently active
 * accordion item or items.
 *
 * @property {Array<string>|string|undefined} activeKey
 * Stores the key of the currently
 * expanded item or items.
 *
 * @property {boolean} alwaysOpen
 * Indicates whether multiple accordion items
 * can remain expanded simultaneously.
 */

/** @type {React.Context<AccordionContextValue | null>} */
export const AccordionContext = createContext(
  /** @type {AccordionContextValue | null} */ (null),
);

export function useAccordionContext() {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error(
      "AccordionItem components must be used within AccordionItem.",
    );
  }

  return context;
}
