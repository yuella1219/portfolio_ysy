"use client";

import {
  useEffect,
  useMemo,
  useState,
  type AriaRole,
  type CSSProperties,
  type MouseEvent,
} from "react";
import { useScrollLock } from "./useScrollLock";
import { getOverlayViewportRect } from "@utils/overlayPosition";

/** 중첩 dialog overlay 카운트 — aria-hidden 적용/해제 타이밍 제어 */
let overlayCount = 0;

/** overlay UI 패턴 구분 */
export type OverlayType = "dialog" | "popover";

interface UseModalOverlayOptions {
  isOpen: boolean;
  onClose?: () => void;
  isDismissable?: boolean;
  labelledBy?: string;
  describedBy?: string;
  type?: OverlayType;
  role?: AriaRole;
}

/**
 * Modal / Popover 공통 overlay 로직 hook.
 * JSX를 반환하지 않고 overlay·content에 spread할 props만 제공합니다.
 * 실제 DOM 렌더링은 Modal, Popover 컴포넌트에서 createPortal로 처리합니다.
 */
export function useModalOverlay({
  isOpen,
  onClose,
  isDismissable = true,
  labelledBy,
  describedBy,
  type = "dialog",
  role,
}: UseModalOverlayOptions) {
  const [vh, setVh] = useState(0);
  const [viewport, setViewport] = useState({ top: 0, height: 0 });

  // dialog만 배경 스크롤 잠금 (popover는 페이지 스크롤 유지)
  useScrollLock(isOpen && type === "dialog");

  // ESC 키로 닫기
  useEffect(() => {
    if (!isOpen || !isDismissable || !onClose) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isDismissable, onClose]);

  // dialog: viewport/document 좌표 추적 — fixed 없이 backdrop이 보이는 화면 전체를 덮도록 함
  useEffect(() => {
    if (!isOpen || type !== "dialog") return;

    const updateViewport = () => {
      const visualHeight = window.visualViewport?.height ?? window.innerHeight;
      setVh(visualHeight * 0.01);
      setViewport(getOverlayViewportRect());
    };

    updateViewport();
    const visualViewport = window.visualViewport;
    window.addEventListener("resize", updateViewport);
    visualViewport?.addEventListener("resize", updateViewport);
    visualViewport?.addEventListener("scroll", updateViewport);
    return () => {
      window.removeEventListener("resize", updateViewport);
      visualViewport?.removeEventListener("resize", updateViewport);
      visualViewport?.removeEventListener("scroll", updateViewport);
    };
  }, [isOpen, type]);

  // dialog: portal 형제 요소(header, main, footer)를 스크린리더에서 숨김
  useEffect(() => {
    if (!isOpen || type !== "dialog") return;

    const portalRoot = document.getElementById("portal-root");
    if (!portalRoot) return;

    const siblings = Array.from(
      portalRoot.parentElement?.children ?? [],
    ).filter((element) => element !== portalRoot);

    if (overlayCount === 0) {
      siblings.forEach((element) =>
        element.setAttribute("aria-hidden", "true"),
      );
    }
    overlayCount++;

    return () => {
      overlayCount--;
      if (overlayCount === 0) {
        siblings.forEach((element) => element.removeAttribute("aria-hidden"));
      }
    };
  }, [isOpen, type]);

  /**
   * backdrop wrapper에 spread
   * - dialog: top/height만 JS — 가로는 left:0 + right:0으로 portal-root content box에 맞춤
   * - popover: 크기 지정 없음 — 패널만 렌더, 바깥 클릭 닫기는 Popover에서 document listener로 처리
   */
  const overlayProps = useMemo(() => {
    const dialogViewportStyle =
      type === "dialog"
        ? {
            position: "absolute" as const,
            top: `calc(${viewport.top}px - env(safe-area-inset-top, 0px))`,
            left: 0,
            right: 0,
            height: `calc(${viewport.height}px + env(safe-area-inset-top, 0px) + env(safe-area-inset-bottom, 0px))`,
          }
        : {};

    return {
      "data-overlay": isOpen ? true : undefined,
      onClick: type === "dialog" && isDismissable ? onClose : undefined,
      style: {
        ...dialogViewportStyle,
        ...(!isOpen && { visibility: "hidden" as const }),
        ...(type === "dialog" && vh
          ? ({ "--layout-vh": `${vh}px` } as CSSProperties)
          : {}),
      },
    };
  }, [isOpen, onClose, isDismissable, vh, viewport, type]);

  /** dialog / popover 패널에 spread — role, aria-* 및 내부 클릭 전파 차단 */
  const modalProps = useMemo(() => {
    const resolvedRole = role ?? (type === "popover" ? "group" : "dialog");

    return {
      role: resolvedRole,
      ...(type === "dialog" && { "aria-modal": true as const }),
      ...(labelledBy && { "aria-labelledby": labelledBy }),
      ...(describedBy && { "aria-describedby": describedBy }),
      onClick: isDismissable
        ? (event: MouseEvent) => event.stopPropagation()
        : undefined,
    };
  }, [isDismissable, role, type, labelledBy, describedBy]);

  return { overlayProps, modalProps, type };
}
