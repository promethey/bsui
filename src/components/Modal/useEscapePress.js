import { useEffect } from "react";

/**
 * @param {boolean} open
 * @param {function} [onHide]
 */
export function useEscapePress(open, onHide) {
  return useEffect(() => {
    if (!open) return;

    /**
     * Handles keyboard interactions for the modal.
     *
     * @param {KeyboardEvent} event
     */
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onHide?.(event, "escape");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onHide]);
}
