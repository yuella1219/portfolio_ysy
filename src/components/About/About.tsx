"use client";

import { useState, useRef, useCallback } from "react";
import styles from "./About.module.scss";
import { Heading, Text, TitleArea, Button, FlexBox } from "@ui/index";
import clsx from "clsx";
import { useDeviceSize } from "@/hooks";

export function About() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLaptop } = useDeviceSize();
  const titleAreaRef = useRef<HTMLDivElement>(null);

  const handleReadMore = useCallback(() => {
    setIsOpen(!isOpen);
    if (titleAreaRef.current) {
      // header-height를 px 단위로 변환
      const raw = getComputedStyle(document.documentElement)
        .getPropertyValue("--header-height")
        .trim();
      const rootFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize,
      );
      const headerHeight = parseFloat(raw) * rootFontSize;

      // titleAreaRef의 상단 위치에서 header-height만큼 빼서 스크롤 위치 계산
      const y =
        titleAreaRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [isOpen]);

  return (
    <section className={clsx(styles.root)}>
      <div className={styles.container}>
        <TitleArea
          ref={titleAreaRef}
          category="About"
          title="구현으로 증명하는 강점"
          description={
            isOpen ? (
              <>
                좋은 화면은 시안과 똑같이 보이는 것에서 끝나지 않습니다. <br />
                누가, 어떤 환경에서 사용하더라도 자연스럽게 읽히고 동작해야
                합니다.
              </>
            ) : (
              <>
                디자인을 화면으로 옮기는 데서 끝내지 않고, 구조적인 마크업과
                {isLaptop && <br />}
                JavaScript 인터랙션으로 완성도 높은 웹 경험을 구현합니다.
              </>
            )
          }
        />

        <div className={styles.content}>
          {!isOpen ? (
            <>
              <div className={styles.item}>
                <Text
                  size="l"
                  as="span"
                  color="white"
                  weight="regular"
                  align="right"
                >
                  [ Career ]
                </Text>
                <Heading as="strong" size="1" className={styles.mainTxt}>
                  7+
                </Heading>
                <Text size="m" color="gray100" className={styles.desc}>
                  랜딩 페이지부터 금융까지
                  <br />
                  다양한 경험을 축적
                </Text>
              </div>

              <div className={styles.item}>
                <Text
                  size="l"
                  as="span"
                  color="white"
                  weight="regular"
                  align="right"
                >
                  [ Accessibility ]
                </Text>
                <Heading as="strong" size="1" className={styles.mainTxt}>
                  Certified
                </Heading>
                <Text size="m" color="gray100" className={styles.desc}>
                  정부 산하 공공기관 뿐만 아니라 민간 기업도
                  <br />
                  웹접근성 심사 준비부터 취득 완료까지
                </Text>
              </div>

              <div className={styles.item}>
                <Text
                  size="l"
                  as="span"
                  color="white"
                  weight="regular"
                  align="right"
                >
                  [ Skills ]
                </Text>
                <Text size="l" color="white">
                  HTML5 · CSS3 · SCSS · Tailwind · JavaScript · React ·
                  TypeScript · Next.js · jQuery · Git · SVN
                </Text>
                <Text size="m" color="gray100" className={styles.desc}>
                  마크업부터 스타일링, 인터랙션까지
                  <br />
                  프로젝트에 맞는 기술을 유연하게 활용
                </Text>
              </div>
            </>
          ) : (
            <Text size="xl" weight="light" color="gray200">
              저는 디자인과 개발 사이에서 화면의 완성도를 만드는 웹
              퍼블리셔입니다.
              <br />
              <br />
              약 7년간 커머스, 금융, 공공기관 등 다양한 프로젝트를 경험하며
              운영, 리뉴얼, 신규 구축 환경에 맞는 웹 화면을 구현해왔습니다.
              디자인 업무를 함께 경험하며 시안의 의도와 구조를 이해하는 힘을
              길렀고, 이를 바탕으로 마크업과 스타일링, JavaScript 인터랙션을
              실제 서비스에 안정적으로 반영하는 일을 중요하게 생각합니다.
              <br />
              <br />
              저는 책임감 있는 구현이 프로젝트의 품질을 만든다고 믿습니다. 맡은
              화면을 단순히 완성하고 넘기는 것이 아니라, 실제 서비스 안에서
              어떻게 사용되고 유지될지까지 고민하며 작업합니다. 작은 마크업
              구조, 스타일의 일관성, 인터랙션의 흐름 같은 디테일이 모여 화면의
              완성도를 만들고, 그 완성도가 곧 서비스의 신뢰로 이어진다고
              생각합니다.
              <br />
              <br />
              좋은 결과물은 원활한 협업 안에서 완성된다고 생각합니다. 디자이너와
              개발자의 의도를 더 정확히 이해하기 위해 Figma, Photoshop 등 디자인
              툴을 익혔고, 최근에는 Codex, Framer, Claude Code와 같은 AI 도구를
              활용해 컨벤션 정리와 컴포넌트 구조, 스타일 구현 방식까지 더
              효율적으로 개선하는 방법을 연구하고 있습니다.
              <br />
              <br />
              현재는 퍼블리싱 경험을 기반으로 React와 프론트엔드 기술을 꾸준히
              확장해가고 있습니다. 앞으로는 컴포넌트 설계, 상태 관리, 앱
              빌드까지 다룰 수 있는 프론트엔드 개발자로 성장하며, 오래 유지될 수
              있는 구조와 더 나은 사용자 경험을 함께 고민하는 사람이 되고자
              합니다.
            </Text>
          )}
        </div>

        <FlexBox justify="end">
          <Button size="medium" variant="default" onClick={handleReadMore}>
            {isOpen ? "Back" : "Read More"}
          </Button>
        </FlexBox>
      </div>
    </section>
  );
}
