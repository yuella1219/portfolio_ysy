"use client";

import React, { useState } from "react";
import { TitleArea, Link, Text, FlexBox } from "@ui/index";
import clsx from "clsx";
import styles from "./Etc.module.scss";
import { useDeviceSize } from "@hooks/index";

export const Etc = () => {
  const [isTypingEnd, setIsTypingEnd] = useState(false);
  const { isLaptop } = useDeviceSize();

  return (
    <div id="etc" className={styles.root}>
      <TitleArea
        category="Etc"
        title="그 외"
        description={<>포트폴리오 관련 링크</>}
        endDelay={() => setIsTypingEnd(true)}
      />

      <FlexBox
        gap={4}
        className={clsx(styles.link, isTypingEnd && styles.isShow)}
        align="center"
        {...(!isLaptop && { direction: "column" })}
      >
        <Text size="xl" color="gray200">
          Github
        </Text>
        <Text size="xl" color="gray200">
          <Link
            href="https://github.com/yuella1219/portfolio_ysy.git"
            target="_blank"
            variant="underline"
          >
            Go To Github
          </Link>
        </Text>
      </FlexBox>
    </div>
  );
};
