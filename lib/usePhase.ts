"use client";

import { useState, useEffect } from "react";

/**
 * Fires a sequence of phase increments at given ms intervals.
 * Returns current phase number starting at 0.
 *
 * Example: usePhase([500, 800, 1200]) fires phase 1 at 500ms, 2 at 800ms, 3 at 1200ms.
 */
export function usePhase(delays: number[]): number {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = delays.map((ms, i) =>
      setTimeout(() => setPhase(i + 1), ms)
    );
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return phase;
}
