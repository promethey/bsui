import { createContext, useContext } from "react";

/**
 * @typedef {Object} ModalContextValue
 * @property {(event?: React.SyntheticEvent, closeType?: string) => void} [onClose]
 */

/** @type {React.Context<ModalContextValue | null>} */
export const ModalContext = createContext(
  /** @type {ModalContextValue | null} */ (null),
);

export function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModalContext must be used within a Modal provider.");
  }

  return context;
}
