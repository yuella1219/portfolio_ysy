"use client";

import styles from "./Nav.module.scss";
import { usePortal, useModalOverlay, useDeviceSize } from "@hooks/index";
import { Button, Link, Text, Heading } from "@ui/index";
import clsx from "clsx";
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { withBasePath } from "@utils/index";

interface NavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  closeDelay?: number;
}

const NAV_LIST = [
  {
    label: "HOME",
    href: "#home",
  },
  {
    label: "ABOUT",
    href: "#about",
  },
  {
    label: "EXPERIENCE",
    href: "#experience",
  },
  {
    label: "PROJECT",
    href: "#project",
  },
  {
    label: "ETC",
    href: "#etc",
  },
];

export function Nav({ isOpen, setIsOpen, closeDelay = 800 }: NavProps) {
  const portalRoot = usePortal("portal-root");
  const [isShow, setIsShow] = useState(false);
  const { isLaptop } = useDeviceSize();
  const router = useRouter();

  const handleClose = () => {
    setIsShow(false);
    setIsOpen(false);
  };

  const handleNavClick = (href: string) => {
    handleClose();

    if (!href.startsWith("#")) {
      window.setTimeout(() => {
        router.push(href);
      }, closeDelay);
      return;
    }

    const id = href.slice(1);
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, closeDelay);
  };

  useEffect(() => {
    if (!isOpen) return;
    setIsShow(true);
  }, [isOpen]);

  const { overlayProps, modalProps } = useModalOverlay({
    isOpen,
    onClose: () => {},
    isDismissable: true,
    labelledBy: "nav",
    describedBy: "nav",
    type: "dialog",
  });

  if (!portalRoot) return null;

  return createPortal(
    <div {...overlayProps} {...modalProps}>
      <div className={clsx(styles.root, isShow && styles.open)}>
        <div className={styles.fakeHeader}>
          <Heading size="3" as="strong">
            <Link href="/">
              {!isLaptop ? "Forward" : "Forward Through Craft"}
            </Link>
          </Heading>
          <Button
            variant="ghost"
            size="medium"
            className={styles.closeBtn}
            onClick={handleClose}
            aria-expanded={true}
            aria-label="메뉴 닫기"
          >
            <span className={clsx(styles.icon, isShow && styles.open)} />
            CLOSE
          </Button>
        </div>
        <nav className={clsx(styles.container, isShow && styles.open)}>
          <div className={styles.top}>
            {isLaptop && (
              <img
                src={withBasePath("/img/visual/nav-img.png")}
                className={styles.img}
                alt=""
              />
            )}
            <ul className={styles.list}>
              {NAV_LIST.map((item, idx) => (
                <li className={styles.item} key={`${item.href}-${idx}`}>
                  <button
                    className={styles.button}
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.label}{" "}
                    <Text
                      size="m"
                      color="gray100"
                      as="span"
                      className={styles.idxText}
                    >
                      [ {idx + 1} ]
                    </Text>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.connect}>
            <Text size="l" color="gray100">
              Direct Connect
            </Text>
            <Text size="l" color="white">
              <Link href="mailto:yuella1219@naver.com" className={styles.mail}>
                yuella1219@naver.com
              </Link>
            </Text>
          </div>
        </nav>

        <div className={clsx(styles.gridGroup, isShow && styles.open)}>
          <span className={styles.gridItem} />
          <span className={styles.gridItem} />
          {isLaptop && (
            <>
              <span className={styles.gridItem} />
              <span className={styles.gridItem} />
            </>
          )}
        </div>
      </div>
    </div>,
    portalRoot,
  );
}
