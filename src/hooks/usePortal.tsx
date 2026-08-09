"use client";

import { useState, useEffect } from "react";

/**
 * layout.tsx에 정의된 portal mount point DOM을 조회합니다.
 * SSR 환경에서는 null을 반환하며, 클라이언트 마운트 후 root element를 반환합니다.
 *
 * @param portalId - portal container element id (기본값: "portal-root")
 * @returns portal mount 대상 HTMLElement 또는 null
 */
export function usePortal(portalId = "portal-root") {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const portal = document.getElementById(portalId);
    if (portal) {
      setPortalRoot(portal);
    }
  }, [portalId]);

  return portalRoot;
}
