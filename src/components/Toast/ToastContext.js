import { createContext, useContext } from "react";

/**
 * @typedef {Object} ToastContextValue
 * @property {(event?: React.SyntheticEvent, closeType?: string) => void} [onClose]
 */

/** @type {React.Context<ToastContextValue | null>} */
export const ToastContext = createContext(
  /** @type {ToastContextValue | null} */ (null),
);

export function useToastContext() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToastContext must be used within a Toast provider.");
  }

  return context;
}
