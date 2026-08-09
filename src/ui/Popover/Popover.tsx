"use client";

import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useModalOverlay } from "@hooks/useModalOverlay";
import { usePortal } from "@hooks/usePortal";
import { getAnchorDocumentPosition } from "@utils/index";
import styles from "./Popover.module.scss";

interface PopoverPosition {
  top: number;
  left: number;
}

interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  /** popover 열림 상태 */
  isOpen: boolean;
  /** backdrop 클릭, ESC, 스크롤 등 닫기 콜백 */
  onClose: () => void;
  /** popover 위치 기준 트리거 element ref */
  anchorRef: React.RefObject<HTMLElement | null>;
  /** 바깥 클릭·ESC로 닫기 허용 여부 */
  isDismissable?: boolean;
  /** 스크롤 발생 시 닫기 여부 (capture phase로 모든 scroll container 감지) */
  closeOnScroll?: boolean;
  /** anchor 하단과 popover 상단 사이 간격(px) */
  offset?: number;
  /** aria-labelledby 대상 element id */
  labelledBy?: string;
  /** aria-describedby 대상 element id */
  describedBy?: string;
  children?: React.ReactNode;
}

/**
 * 트리거(anchor) 기준으로 열리는 popover.
 * #portal-root(absolute)에 패널만 portal하며, fixed·fullscreen overlay는 사용하지 않습니다.
 */
export const Popover = ({
  isOpen,
  onClose,
  anchorRef,
  isDismissable = true,
  closeOnScroll = true,
  offset = 8,
  labelledBy,
  describedBy,
  children,
  className,
  ...props
}: PopoverProps) => {
  const portalRoot = usePortal("portal-root");
  const popoverRef = useRef<HTMLDivElement>(null);
  const { overlayProps, modalProps } = useModalOverlay({
    isOpen,
    onClose,
    isDismissable,
    labelledBy,
    describedBy,
    type: "popover",
  });
  const [position, setPosition] = useState<PopoverPosition>({ top: 0, left: 0 });

  // anchor document 좌표 추적
  useEffect(() => {
    if (!isOpen || !anchorRef.current) return;

    const updatePosition = () => {
      if (!anchorRef.current) return;
      setPosition(getAnchorDocumentPosition(anchorRef.current, offset));
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);

    return () => window.removeEventListener("resize", updatePosition);
  }, [isOpen, anchorRef, offset]);

  // fullscreen overlay 없이 바깥 클릭 감지
  useEffect(() => {
    if (!isOpen || !isDismissable) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;

      if (popoverRef.current?.contains(target)) return;
      if (anchorRef.current?.contains(target)) return;

      onClose();
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen, isDismissable, onClose, anchorRef]);

  // scroll 이벤트는 bubble하지 않으므로 capture phase로 전역 감지
  useEffect(() => {
    if (!isOpen || !closeOnScroll) return;

    const handleScroll = () => {
      onClose();
    };

    document.addEventListener("scroll", handleScroll, {
      capture: true,
      passive: true,
    });

    return () => {
      document.removeEventListener("scroll", handleScroll, { capture: true });
    };
  }, [isOpen, closeOnScroll, onClose]);

  if (!portalRoot) return null;

  return createPortal(
    <div className={clsx(styles.overlay, isOpen && styles.open)} {...overlayProps}>
      <div
        ref={popoverRef}
        className={clsx(styles.popover, className)}
        style={{ top: position.top, left: position.left }}
        {...props}
        {...modalProps}
      >
        {children}
      </div>
    </div>,
    portalRoot,
  );
};
