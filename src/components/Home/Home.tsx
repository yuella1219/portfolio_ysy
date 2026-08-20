"use client";

import React, { useRef, useState } from "react";
import styles from "./Home.module.scss";
import { Heading, Text } from "@ui/index";
import { TypingText } from "./TypingText";
import { useLenis } from "lenis/react";
import clsx from "clsx";

const MAX_MOVE = 180;

export function Home() {
  const [isTypingEnd, setIsTypingEnd] = useState(false);
  const homeRef = useRef<HTMLDivElement>(null);

  const handleTypingEnd = (end: boolean): void => {
    setIsTypingEnd(end);
  };

  useLenis(({ scroll }) => {
    const home = homeRef.current;

    if (!home) return;

    const { height, bottom } = home.getBoundingClientRect();

    // 아래로 완전히 사라졌다면 더 이상 이동시키지 않음
    if (bottom <= 0) return;

    const progress = Math.min(Math.max(scroll / height, 0), 1);

    const translateY = progress * -MAX_MOVE;

    home.style.transform = `translate3d(0, ${translateY}px, 0)`;
  });

  return (
    <>
      <section className={styles.root} id="home" ref={homeRef}>
        <div className={styles.hero}>
          <Heading size="1" as="strong" className={styles.headline}>
            <TypingText
              text={["FORWARD", "THROUGH", "CRAFTING"]}
              speed={80}
              align={["left", "right", "left"]}
              startDelay={2000}
              endDelay={handleTypingEnd}
            />
          </Heading>

          <div className={clsx(styles.descGroup, isTypingEnd && styles.show)}>
            <Heading size="5" color="gray200" as="strong" weight="regular">
              디자인을 정확한 화면으로 구현하고, 구조적인 마크업과 유연한
              인터랙션으로
              <br />
              웹의 완성도를 높이는 웹 퍼블리셔입니다.
            </Heading>
            <br />
            <Text size="l" color="gray100" as="span">
              [ Web Publisher ]
            </Text>
          </div>
        </div>
      </section>

      <div className={styles.grid} aria-hidden="true">
        <span className={styles.gridLineV} />
        <div className={styles.gridLinesH}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </>
  );
}
