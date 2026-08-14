"use client";

import React from "react";
import clsx from "clsx";
import styles from "./Project.module.scss";
import type { ProjectDataProps } from "@data/index";
import { Text, Heading, Link, FlexBox } from "@ui/index";
import { ProjectCard } from "./ProjectCard";
import { useDeviceSize, usePortal, useModalOverlay } from "@hooks/index";
import { createPortal } from "react-dom";

const InfoItem = ({
  name,
  value,
  valueAs,
  className,
}: {
  name: string;
  value: string | number | ProjectDataProps["url"];
  valueAs?: "string" | "link";
  className?: string;
}) => {
  return (
    <li className={styles.item}>
      <Text
        size="l"
        as="strong"
        color="gray200"
        weight="bold"
        className={styles.itemNm}
      >
        {name}
      </Text>
      <Text
        size="l"
        color="gray200"
        className={clsx(styles.itemVal, className)}
      >
        {Array.isArray(value)
          ? value.map((url: { name: string; url: string }, idx: number) => (
              <Link
                href={url.url}
                target="_blank"
                variant="underline"
                key={`${url.name}-${idx}`}
                className={styles.link}
              >
                {url.name}
              </Link>
            ))
          : value}
      </Text>
    </li>
  );
};

export const ProjectDetail = ({
  data,
  onClose,
}: {
  data: ProjectDataProps;
  onClose: () => void;
}) => {
  const { isMobile, isLaptop } = useDeviceSize();
  const portalRoot = usePortal("portal-root");

  const { overlayProps, modalProps } = useModalOverlay({
    isOpen: true,
    onClose: onClose,
    isDismissable: true,
    labelledBy: "project-detail",
    describedBy: "project-detail",
    type: "dialog",
  });
  if (!portalRoot) return null;

  return createPortal(
    <div className={clsx(styles.detailArea)} {...overlayProps} {...modalProps}>
      {isLaptop && (
        <div className={styles.cardArea}>
          <ProjectCard data={data} onClick={() => {}} variant="detail" />
        </div>
      )}
      {/* 프로젝트 상세 정보 */}
      <div className={styles.detailContent}>
        <Text size="m" color="gray100">
          {data.posNm}
        </Text>
        <FlexBox
          className={styles.tit}
          justify="between"
          items={isMobile ? "start" : "center"}
          {...(isMobile && { direction: "column", gap: 2 })}
        >
          <Heading size="3">{data.proNm}</Heading>
          <Text size="m" color="gray200" as="span">
            {data.startDt} - {data.endDt}
          </Text>
        </FlexBox>

        <ul className={styles.infoList}>
          <InfoItem name="사용 기술" value={data.useLaun} />
          {data.devFrm && (
            <InfoItem name="프레임워크 / 라이브러리" value={data.devFrm} />
          )}
          <InfoItem name="서비스 환경" value={data.devOs} />
          <InfoItem name="고객사" value={data.clientNm} />
          <InfoItem name="총 인원" value={data.member} />
          <InfoItem name="기여도" value={data.contribRate + "%"} />
          <InfoItem
            name="포지션"
            value={data.role}
            className={styles.roleTxt}
          />
          {data.url && (
            <InfoItem name="관련 url" value={data.url} valueAs="link" />
          )}
        </ul>

        <div className={styles.desc}>
          <Text size="l" weight="bold" className={styles.descTitle}>
            프로젝트 내용
          </Text>
          <Text
            size="l"
            color="gray200"
            weight="light"
            className={styles.descTxt}
          >
            {data.proInter}
          </Text>
        </div>

        <div className={styles.desc}>
          <Text size="l" weight="bold" className={styles.descTitle}>
            작업 내용
          </Text>
          <div className={styles.descTxt}>{data.intoTxt}</div>
        </div>
        <button className={styles.closeBtn} onClick={onClose}></button>
      </div>
      <div className={styles.dimmed} onClick={onClose} />
    </div>,
    portalRoot,
  );
};
