import { useEffect } from "react";

/**
 * Locks and unlocks document body scroll
 * when Offcanvas is open.
 *
 * @param {boolean} open
 * Controls whether body scroll locking is applied.
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
export function useBodyScrollLock(open) {
  return useEffect(() => {
    if (!open) return;

    document.body.classList.add("overflow-hidden", "pe-0");

    return () => {
      document.body.classList.remove("overflow-hidden", "pe-0");
    };
  }, [open]);
}
