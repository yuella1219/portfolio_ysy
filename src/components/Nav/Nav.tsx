"use client";

import styles from "./Nav.module.scss";
import { usePortal, useModalOverlay, useScrollLock } from "@hooks/index";
import { Button, Link, Text, Heading } from "@ui/index";
import clsx from "clsx";
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface NavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const NAV_LIST = [
  {
    label: "HOME",
    href: "/home",
  },
  {
    label: "ABOUT",
    href: "/about",
  },
  {
    label: "EXPERIENCE",
    href: "/experience",
  },
  {
    label: "PROJECT",
    href: "/project",
  },
  {
    label: "SANDBOX",
    href: "/sandbox",
  },
];

export function Nav({ isOpen, setIsOpen }: NavProps) {
  const portalRoot = usePortal("portal-root");
  const [isShow, setIsShow] = useState(false);
  const router = useRouter();

  const handleClose = () => {
    setIsShow(false);
    setIsOpen(false);
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
            <Link href="/">Forward Through Craft</Link>
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
            <img src="/img/nav-img.png" className={styles.img} alt="" />
            <ul className={styles.list}>
              {NAV_LIST.map((item, idx) => (
                <li className={styles.item} key={`${item.href}-${idx}`}>
                  <button
                    className={styles.button}
                    onClick={() => {
                      handleClose();
                      router.push(item.href);
                    }}
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
              <Link href="mailto:yuella1219@namver.com" className={styles.mail}>
                yuella1219@namver.com
              </Link>
            </Text>
          </div>
        </nav>

        <div className={clsx(styles.gridGroup, isShow && styles.open)}>
          <span className={styles.gridItem} />
          <span className={styles.gridItem} />
          <span className={styles.gridItem} />
          <span className={styles.gridItem} />
        </div>
      </div>
    </div>,
    portalRoot,
  );
}
