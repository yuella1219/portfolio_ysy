/**
 * #portal-root(absolute) 기준 dialog overlay 영역
 * - top/height만 document 좌표로 계산 (보이는 viewport 세로 범위)
 * - 가로는 portal-root content box 기준 100% — clientWidth px 사용 시 body padding 때문에 overflow 발생
 */
export function getOverlayViewportRect() {
  return {
    top: window.scrollY,
    height: window.innerHeight,
  };
}

/**
 * overlay wrapper(#portal-root absolute + scroll offset) 내부 popover 배치 좌표
 * — overlay가 document scroll 위치에 있으므로 getBoundingClientRect(viewport) 좌표 사용
 */
export function getAnchorOverlayPosition(
  anchor: HTMLElement,
  offset: number,
) {
  const rect = anchor.getBoundingClientRect();

  return {
    top: rect.bottom + offset,
    left: rect.left,
  };
}

/**
 * #portal-root(absolute) 직속 popover 배치 좌표 — document 좌표계
 */
export function getAnchorDocumentPosition(
  anchor: HTMLElement,
  offset: number,
) {
  const rect = anchor.getBoundingClientRect();

  return {
    top: rect.bottom + offset + window.scrollY,
    left: rect.left + window.scrollX,
  };
}
