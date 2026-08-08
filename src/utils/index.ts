/**
 * body 태그에 scroll lock을 설정하거나 해제합니다.
 * @param lock - true면 scroll lock을 설정, false면 해제합니다.
 */
export function setBodyScrollLock(lock: boolean) {
  if (typeof document === "undefined") return;
  const LOCK_CLASS = "scroll-lock";
  if (lock) {
    document.body.classList.add(LOCK_CLASS);
  } else {
    document.body.classList.remove(LOCK_CLASS);
  }
}
