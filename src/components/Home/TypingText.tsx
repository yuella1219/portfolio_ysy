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
}

type TypingPhase = "ready" | "typing" | "done";

export const TypingText = ({
  text,
  speed = 80,
  align = ["left"] as alignProps[],
}: TypingTextProps) => {
  const textArray = useMemo(() => (Array.isArray(text) ? text : null), [text]);

  const [phase, setPhase] = useState<TypingPhase>("ready");
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

  const showCursor = phase === "typing" || phase === "done";

  const renderSequence = () =>
    textArray?.map((item, index) => {
      const alignClass = styles[align[index] ?? align[0]];
      const isCompleted = index < idxArr || phase === "done";
      const isCurrent = index === idxArr && phase !== "ready";

      if (isCompleted) {
        return (
          <span
            key={index}
            className={clsx(
              styles.typingItem,
              alignClass,
              index < textArray.length - 1 && styles.block,
            )}
          >
            {item}
          </span>
        );
      }

      if (isCurrent) {
        return (
          <span key={index} className={clsx(styles.typingItem, alignClass)}>
            {item.slice(0, currentIdx)}
          </span>
        );
      }

      return null;
    });

  return (
    <span className={clsx(styles.typing)}>
      {textArray ? (
        renderSequence()
      ) : (
        <span className={clsx(styles[align[0]])}>
          {currentTxt.slice(0, currentIdx)}
        </span>
      )}

      {showCursor && <span className={styles.cursor} aria-hidden="true" />}
    </span>
  );
};
