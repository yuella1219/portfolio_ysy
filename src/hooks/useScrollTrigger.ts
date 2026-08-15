"use client";

import { RefObject, useEffect, useRef, useState } from "react";

type ScrollDirection = "down" | "up" | "both";

interface UseScrollTriggerOptions {
  /** 오프셋 */
  offset?: number;
  /** true가 된 뒤 다시 false로 돌아가지 않음 */
  once?: boolean;
  /** 조건부 훅 동작 컨트롤 */
  enabled?: boolean;
  /** ref가 얼마나 보여야 true로 볼지 */
  threshold?: number | number[];
  /** 스크롤 방향 */
  direction?: ScrollDirection;

  /**
   * 요소가 viewport 밖으로 나갔을 때 false로 되돌릴지 여부
   *
   * true: 나가면 false
   * false: 한 번 true가 되면 viewport 밖으로 나가도 유지
   */
  resetOnExit?: boolean;
}

export function useScrollTrigger<T extends Element>(
  targetRef: RefObject<T | null>,
  options: UseScrollTriggerOptions = {},
) {
  const {
    offset = 0,
    once = true,
    enabled = true,
    threshold = 0,
    direction = "both",
    resetOnExit = direction === "both",
  } = options;

  const [isTriggered, setIsTriggered] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const target = targetRef.current;

    if (!enabled || !target) {
      setIsTriggered(false);
      return;
    }

    lastScrollYRef.current = window.scrollY;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentScrollY = window.scrollY;
        const lastScrollY = lastScrollYRef.current;

        const currentDirection =
          currentScrollY > lastScrollY
            ? "down"
            : currentScrollY < lastScrollY
              ? "up"
              : null;

        lastScrollYRef.current = currentScrollY;

        const isDirectionMatched =
          direction === "both" || currentDirection === direction;

        const shouldTrigger = entry.isIntersecting && isDirectionMatched;
        const shouldReset = !entry.isIntersecting && resetOnExit;

        setIsTriggered((prev) => {
          if (once && prev) return true;

          if (shouldTrigger) return true;

          if (shouldReset) return false;

          return prev;
        });

        if (once && shouldTrigger) {
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: `0px 0px ${-offset}px 0px`,
        threshold,
      },
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [targetRef, offset, once, enabled, threshold, direction, resetOnExit]);

  return isTriggered;
}
