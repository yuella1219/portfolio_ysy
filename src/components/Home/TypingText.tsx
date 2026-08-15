import { useCallback, useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import styles from "./Home.module.scss";

type alignProps = "left" | "center" | "right";

interface TypingTextProps {
  /** 타이핑할 텍스트 */
  text: string | string[];
  /** 타이핑 속도 */
  speed?: number;
  /** 정렬 */
  align?: alignProps[];
  /** 텍스트 타이핑 시작 전 지연(ms) */
  startDelay?: number;
  /** 타이핑 종료 */
  endDelay?: (end: boolean) => void;
  /** 커서 깜빡임 — true이고 phase가 done이면 커서 유지, false면 완료 후 언마운트 */
  cursorBlink?: boolean;
  /** 타이핑 시작 — true일 때 애니메이션 시작 */
  start?: boolean;
}

type TypingPhase = "waiting" | "ready" | "typing" | "done";

export const TypingText = ({
  text,
  speed = 80,
  align = ["left"] as alignProps[],
  startDelay = 0,
  endDelay,
  cursorBlink = true,
  start = true,
}: TypingTextProps) => {
  const textArray = useMemo(() => (Array.isArray(text) ? text : null), [text]);

  const [phase, setPhase] = useState<TypingPhase>(() =>
    start && startDelay === 0 ? "ready" : "waiting",
  );
  const [currentTxt, setCurrentTxt] = useState("");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [idxArr, setIdxArr] = useState(0);

  const handleTyping = useCallback(() => {
    if (currentIdx >= currentTxt.length) {
      if (textArray && idxArr < textArray.length - 1) {
        setIdxArr((prev) => prev + 1);
        setCurrentIdx(0);
        setPhase("ready");
        return;
      }

      setPhase("done");
      return;
    }

    const timer = setTimeout(() => {
      setCurrentIdx((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIdx, currentTxt, speed, textArray, idxArr]);

  useEffect(() => {
    if (!start) return;
    if (phase !== "waiting") return;

    if (startDelay <= 0) {
      setPhase("ready");
      return;
    }

    const timer = setTimeout(() => {
      setPhase("ready");
    }, startDelay);

    return () => clearTimeout(timer);
  }, [start, phase, startDelay]);

  useEffect(() => {
    if (phase !== "ready") return;

    const nextTxt = Array.isArray(text) ? (text[idxArr] ?? "") : text;
    setCurrentTxt(nextTxt);
    setCurrentIdx(0);
    setPhase("typing");
  }, [text, textArray, phase, idxArr]);

  useEffect(() => {
    if (phase !== "typing") return;
    return handleTyping();
  }, [phase, currentIdx, currentTxt, handleTyping]);

  useEffect(() => {
    if (phase !== "done") return;
    endDelay?.(true);
  }, [phase, endDelay]);

  const renderLine = (
    item: string,
    index: number,
    displayText: string,
    showLineCursor: boolean,
  ) => (
    <span
      key={index}
      className={clsx(styles.typingLine, styles[align[index] ?? align[0]])}
    >
      <span className={styles.typingSlot}>
        <span className={styles.ghost} aria-hidden="true">
          {item}
        </span>
        <span className={styles.typingContent}>
          {displayText}
          {showLineCursor && (
            <span className={styles.cursor} aria-hidden="true" />
          )}
        </span>
      </span>
    </span>
  );

  const renderSequence = () =>
    textArray?.map((item, index) => {
      const isCompleted = index < idxArr || phase === "done";
      const isCurrent = index === idxArr && phase === "typing";
      const isActive = index === idxArr && phase !== "done";
      const isLast = index === textArray.length - 1;
      const displayText = isCompleted
        ? item
        : isCurrent
          ? item.slice(0, currentIdx)
          : "";
      const showLineCursor =
        isActive || (phase === "done" && isLast && cursorBlink);

      return renderLine(item, index, displayText, showLineCursor);
    });

  const renderSingle = () =>
    renderLine(
      currentTxt || (Array.isArray(text) ? "" : text),
      0,
      currentTxt.slice(0, currentIdx),
      phase !== "done" || cursorBlink,
    );

  return (
    <span className={styles.typing}>
      {textArray ? renderSequence() : renderSingle()}
    </span>
  );
};
