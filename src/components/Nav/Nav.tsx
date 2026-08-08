"use client";

import styles from "./Nav.module.scss";
import { Button, Link, Text } from "@ui/index";
import clsx from "clsx";

interface NavProps {
  isOpen: boolean;
}

const NAV_LIST = [
  {
    label: "HOME",
    href: "/",
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

export function Nav({ isOpen }: NavProps) {
  return (
    <nav className={clsx(styles.root, isOpen && styles.open)}>
      <div className={clsx(styles.container, isOpen && styles.open)}>
        <div className={styles.top}>
          <img src="/img/nav-img.png" className={styles.img} alt="" />
          <ul className={styles.list}>
            {NAV_LIST.map((item, idx) => (
              <li className={styles.item} key={`${item.href}-${idx}`}>
                <button className={styles.button}>
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
      </div>

      <div className={styles.gridGroup}>
        <span className={styles.gridItem} />
        <span className={styles.gridItem} />
        <span className={styles.gridItem} />
        <span className={styles.gridItem} />
      </div>
    </nav>
  );
}
