"use client";

import { useEffect } from "react";
import { setBodyScrollLock } from "@utils/index";

/**
 * body 스크롤 잠금을 토글합니다.
 * overlay(dialog)가 열려 있는 동안 배경 스크롤을 방지할 때 사용합니다.
 *
 * @param lock - true면 scroll lock 적용, false면 해제
 */
export function useScrollLock(lock: boolean) {
  useEffect(() => {
    setBodyScrollLock(lock);
    return () => setBodyScrollLock(false);
  }, [lock]);
}
