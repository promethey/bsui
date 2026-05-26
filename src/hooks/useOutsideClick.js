import { useEffect } from "react";

/**
 * Detects pointer interactions outside of a referenced element
 * and invokes a callback when an outside click occurs.
 *
 * Commonly used for dismissible overlays such as:
 * dropdowns, popovers, modals, and context menus.
 *
 * @typedef {Object} UseOutsideClickProps
 * @property {React.RefObject<HTMLElement | null>} ref
 * Reference element used for outside click detection.
 *
 * @property {boolean} enabled
 * Enables or disables outside click detection.
 *
 * @property {() => void} onOutsideClick
 * Callback invoked when a pointer interaction
 * occurs outside the referenced element.
 *
 * @param {UseOutsideClickProps} props
 */
export function useOutsideClick({ ref, enabled, onOutsideClick }) {
  return useEffect(() => {
    if (!enabled) return;

    /** @param {PointerEvent} event */
    const handlePointerDown = (event) => {
      if (event.button !== 0) return;

      if (ref.current?.contains(/** @type {Node} */ (event.target))) {
        return;
      }

      onOutsideClick();
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [ref, enabled, onOutsideClick]);
}
