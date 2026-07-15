import { useEffect } from "react";

/**
 * Automatically hides the toast after the specified delay.
 *
 * @param {boolean} open
 * @param {boolean} autohide
 * @param {number} delay
 * @param {(event?: React.SyntheticEvent|KeyboardEvent, closeType?: string) => void} [onClose]
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
export function useAutohide(open, autohide, delay, onClose) {
  useEffect(() => {
    if (!open || !autohide) {
      return;
    }

    const timer = setTimeout(() => {
      onClose?.(undefined, "autohide");
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [open, autohide, delay, onClose]);
}
