import { createContext, useContext } from "react";

/**
 * @typedef {Object} AccordionContextValue
 * @property {React.Dispatch<React.SetStateAction<string | string[] | undefined>>} setActiveKey
 * @property {Array<string>|string|undefined} activeKey
 * @property {boolean} alwaysOpen - Make accordion items stay open when another item is opened
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
