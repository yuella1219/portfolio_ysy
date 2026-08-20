"use client";

import { useRef, useState } from "react";
import styles from "./Experience.module.scss";
import { TitleArea, Text, Heading, FlexBox } from "@ui/index";
import clsx from "clsx";
import { ExperienceData } from "@data/index";

export function Experience() {
  const [isTypingEnd, setIsTypingEnd] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  return (
    <section id="experience" className={clsx(styles.root)}>
      <TitleArea
        category="Experience"
        title="다양한 환경에서 쌓은 경험"
        endDelay={() => setIsTypingEnd(true)}
        description={
          <>
            서비스 목적에 맞는 마크업과 스타일링, 인터랙션을
            <br />
            정확하고 유연하게 구현합니다.
          </>
        }
      />

      <div className={styles.content}>
        <div
          className={clsx(styles.img, isTypingEnd && styles.visible)}
          ref={imgRef}
        >
          <img
            src="/img/visual/visual-experience.png"
            alt=""
            aria-hidden="true"
          />
        </div>

        <ul className={clsx(styles.list, isTypingEnd && styles.isShow)}>
          {ExperienceData.map((item, idx) => (
            <li key={item.enNm + idx} className={styles.item}>
              <Text size="xxl" weight="medium" color="gray100">
                {item.enNm}
              </Text>
              <Text size="xl" color="gray200" weight="medium" align="right">
                {item.startDate} - {item.endDate}
              </Text>
              <FlexBox gap={3} items="end" justify="start">
                <Text size="xxl" weight="bold" as="strong">
                  {item.companyNm}
                </Text>
                <Text size="m" color="gray100" weight="regular" as="span">
                  {item.teamNm}
                </Text>
              </FlexBox>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
