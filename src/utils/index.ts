/**
 * GitHub Pages 등 basePath가 있는 환경에서 public 절대경로에 prefix를 붙입니다.
 */
export function withBasePath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/")) return path;
  return `${base}${path}`;
}

/**
 * body 태그에 scroll lock을 설정하거나 해제합니다.
 * @param lock - true면 scroll lock을 설정, false면 해제합니다.
 */
export function setBodyScrollLock(lock: boolean) {
  if (typeof document === "undefined") return;
  const LOCK_CLASS = "scroll-lock";
  if (lock) {
    document.documentElement.classList.add(LOCK_CLASS);
  } else {
    document.documentElement.classList.remove(LOCK_CLASS);
  }
}

export {
  getOverlayViewportRect,
  getAnchorOverlayPosition,
  getAnchorDocumentPosition,
} from "./overlayPosition";
