import { useEffect } from "react";

/**
 * Locks and unlocks document body scrolling.
 *
 * @param {boolean} open
 * Controls whether body scroll locking is applied.
 *
 * @param {string} [className]
 * Additional class applied while the body is locked.
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
export function useBodyScrollLock(open, className) {
  useEffect(() => {
    if (!open) return;

    const classes = ["overflow-hidden", "pe-0"];

    if (className) {
      classes.push(className);
    }

    document.body.classList.add(...classes);

    return () => {
      document.body.classList.remove(...classes);
    };
  }, [open, className]);
}
