"use client";

import { createPortal } from "react-dom";
import clsx from "clsx";
import { useModalOverlay, usePortal } from "@hooks/index";
import styles from "./Modal.module.scss";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  /** overlay 열림 상태 */
  isOpen: boolean;
  /** backdrop 클릭, ESC 등 닫기 콜백 */
  onClose: () => void;
  /** backdrop 클릭·ESC로 닫기 허용 여부 */
  isDismissable?: boolean;
  /** aria-labelledby 대상 element id */
  labelledBy?: string;
  /** aria-describedby 대상 element id */
  describedBy?: string;
  children?: React.ReactNode;
}

/**
 * 화면 전체를 덮는 dialog overlay.
 * #portal-root(absolute) + document 좌표로 배치하며 fixed는 사용하지 않습니다.
 */
export const Modal = ({
  isOpen,
  onClose,
  isDismissable = true,
  labelledBy,
  describedBy,
  children,
  className,
  ...props
}: ModalProps) => {
  const portalRoot = usePortal("portal-root");
  const { overlayProps, modalProps } = useModalOverlay({
    isOpen,
    onClose,
    isDismissable,
    labelledBy,
    describedBy,
    type: "dialog",
  });

  if (!portalRoot) return null;

  return createPortal(
    <div
      className={clsx(styles.overlay, isOpen && styles.open)}
      {...overlayProps}
    >
      <div className={clsx(styles.modal, className)} {...props} {...modalProps}>
        {children}
      </div>
    </div>,
    portalRoot,
  );
};
