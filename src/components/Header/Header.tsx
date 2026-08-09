"use client";

import styles from "./Header.module.scss";
import { Heading, Button, Link } from "@ui/index";
import { Nav } from "@components/Nav/Nav";
import { useState } from "react";
import { setBodyScrollLock } from "@utils/index";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const NAV_DELAY = 800;

  const handleMenuClose = () => {
    setBodyScrollLock(false);
    setTimeout(() => {
      setIsOpen(false);
    }, NAV_DELAY);
  };

  return (
    <header className={styles.root}>
      <h1>
        <Heading size="3" as="strong">
          <Link href="/">Forward Through Craft</Link>
        </Heading>
      </h1>
      <Button
        variant="ghost"
        size="medium"
        className={styles.menuBtn}
        onClick={() => {
          setIsOpen(!isOpen);
          setBodyScrollLock(!isOpen);
        }}
        aria-expanded={isOpen}
        aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
      >
        <span className={styles.icon} />
        MENU
      </Button>
      <Nav isOpen={isOpen} setIsOpen={handleMenuClose} />
    </header>
  );
}
