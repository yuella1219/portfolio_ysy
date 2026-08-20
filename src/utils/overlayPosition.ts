/**
 * #portal-root(absolute) 기준 dialog overlay 영역
 * - top/height만 document 좌표로 계산 (보이는 visual viewport 세로 범위)
 * - 가로는 portal-root content box 기준 100% — clientWidth px 사용 시 body padding 때문에 overflow 발생
 * - iOS는 window.innerHeight가 세이프 에어리어를 빼는 경우가 있어 visualViewport를 우선 사용
 */
export function getOverlayViewportRect() {
  const visualViewport = window.visualViewport;
  const offsetTop = visualViewport?.offsetTop ?? 0;
  const height = visualViewport?.height ?? window.innerHeight;

  return {
    top: window.scrollY + offsetTop,
    height,
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
