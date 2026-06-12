import { createContext, useContext } from "react";

/**
 * @typedef {Object} ModalContextValue
 * @property {(event?: React.SyntheticEvent) => void} [onHide]
 */

/** @type {React.Context<ModalContextValue | null>} */
export const ModalContext = createContext(
  /** @type {ModalContextValue | null} */ (null),
);

export function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error(
      "AccordionItem components must be used within AccordionItem.",
    );
  }

  return context;
}
