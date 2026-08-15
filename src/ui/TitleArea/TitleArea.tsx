"use client";

import styles from "./TitleArea.module.scss";
import { Text, Heading } from "@/ui";
import { useDeviceSize, useScrollTrigger } from "@/hooks";
import { forwardRef, useRef, useState } from "react";
import { TypingText } from "@/components/Home/TypingText";
import clsx from "clsx";

interface TitleAreaProps {
  category: string;
  title: string;
  description: React.ReactNode;
  endDelay?: (end: boolean) => void;
}

export const TitleArea = forwardRef<HTMLDivElement, TitleAreaProps>(
  ({ category, title, description, endDelay }, ref) => {
    const { isLaptop } = useDeviceSize();
    const targetRef = useRef<HTMLDivElement>(null);
    const isVisible = useScrollTrigger(targetRef, {
      once: true,
    });
    const [isTypingEnd, setIsTypingEnd] = useState(false);

    const handleTypingEnd = (end: boolean): void => {
      setIsTypingEnd(end);
      endDelay?.(end);
    };

    return (
      <div className={styles.root} ref={ref}>
        <div className={styles.title} ref={targetRef}>
          <Text size={isLaptop ? "xxl" : "l"} weight="light" color="gray100">
            {"[" + " " + category + " " + "]"}
          </Text>
          <Heading size="4" as="h3">
            <TypingText
              start={isVisible}
              text={title}
              speed={80}
              startDelay={500}
              endDelay={handleTypingEnd}
              cursorBlink={!isTypingEnd}
            />
          </Heading>
        </div>
        <Heading
          size={isLaptop ? "2" : "4"}
          as="strong"
          className={clsx(styles.desc, isTypingEnd && styles.isShow)}
        >
          {description}
        </Heading>
      </div>
    );
  },
);
