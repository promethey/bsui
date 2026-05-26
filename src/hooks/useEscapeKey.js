import { useEffect } from "react";

/**
 * Attaches a global keyboard listener and
 * invokes a callback when the Escape key is pressed.
 *
 * Commonly used for dismissible overlays such as:
 * dropdowns, modals, popovers, and dialogs.
 *
 * @typedef {object} UseEscapeKeyProps
 * @property {boolean} enabled -  Enables or disables the Escape key listener.
 * @property {() => void} onEscape - Callback invoked when the Escape key is pressed.
 *
 * @param {UseEscapeKeyProps} props
 */
export function useEscapeKey(props) {
  const { enabled, onEscape } = props;

  return useEffect(() => {
    if (!enabled) return;

    /** @param {KeyboardEvent} event */
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onEscape();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [enabled, onEscape]);
}
