"use client";

import React, { useState } from "react";
import styles from "./Home.module.scss";
import { Heading, Text } from "@ui/index";
import { TypingText } from "./TypingText";
import clsx from "clsx";

export function Home() {
  const [isTypingEnd, setIsTypingEnd] = useState(false);

  const handleTypingEnd = (end: boolean): void => {
    setIsTypingEnd(end);
  };

  return (
    <div className={styles.root} id="home">
      <section className={styles.hero}>
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
      </section>

      <div className={styles.grid} aria-hidden="true">
        <span className={styles.gridLineV} />
        <div className={styles.gridLinesH}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
