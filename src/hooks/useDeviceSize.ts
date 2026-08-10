"use client";

import { useSyncExternalStore } from "react";

/** `src/styles/abstracts/_mixins.scss` breakpoint 값과 동기화 */
const BREAKPOINTS = {
  mobile: 768,
  tablet: 768,
  laptop: 1024,
  desktop: 1402,
} as const;

/** SSR 기본값 — hydration mismatch 완화용 */
const DEFAULT_DEVICE_WIDTH = BREAKPOINTS.laptop;

type DeviceSize = "mobile" | "tablet" | "laptop" | "desktop";

export type DeviceState = {
  width: number;
  /** min-width 기준 단일 구간 (mobile < 768, tablet 768~1023, ...) */
  deviceSize: DeviceSize;
  /** max-width: 768px — mixin mobile */
  isMobile: boolean;
  /** min-width: 768px — mixin tablet */
  isTablet: boolean;
  /** min-width: 1024px — mixin laptop */
  isLaptop: boolean;
  /** min-width: 1402px — mixin desktop */
  isDesktop: boolean;
};

function getDeviceSize(width: number): DeviceSize {
  if (width >= BREAKPOINTS.desktop) return "desktop";
  if (width >= BREAKPOINTS.laptop) return "laptop";
  if (width >= BREAKPOINTS.tablet) return "tablet";
  return "mobile";
}

function createDeviceState(width: number): DeviceState {
  return {
    width,
    deviceSize: getDeviceSize(width),
    isMobile: width <= BREAKPOINTS.mobile,
    isTablet: width >= BREAKPOINTS.tablet,
    isLaptop: width >= BREAKPOINTS.laptop,
    isDesktop: width >= BREAKPOINTS.desktop,
  };
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener("resize", onStoreChange);
  return () => window.removeEventListener("resize", onStoreChange);
}

const SERVER_SNAPSHOT = createDeviceState(DEFAULT_DEVICE_WIDTH);

let cachedWidth: number | null = null;
let cachedSnapshot: DeviceState | null = null;

function getSnapshot() {
  const width = window.innerWidth;

  if (cachedSnapshot && cachedWidth === width) {
    return cachedSnapshot;
  }

  cachedWidth = width;
  cachedSnapshot = createDeviceState(width);
  return cachedSnapshot;
}

function getServerSnapshot() {
  return SERVER_SNAPSHOT;
}

/**
 * mixin breakpoint와 동일한 기준으로 현재 viewport 크기를 반환합니다.
 *
 * @example
 * const { isLaptop, deviceSize } = useDeviceSize();
 */
export function useDeviceSize(): DeviceState {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
