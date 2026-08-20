"use client";

import styles from "./Footer.module.scss";
import { Heading, Text, Link, Button, FlexBox } from "@ui/index";
import { usePortal } from "@hooks/usePortal";

export function Footer() {
  const portalRoot = usePortal("portal-root");
  if (!portalRoot) return null;
  return (
    <>
      <footer className={styles.root}>
        <FlexBox className={styles.content} justify="between" items="center">
          <div>
            <Heading size="5" as="strong" color="gray100">
              Forward Through Crafting
            </Heading>
            <FlexBox gap={2} justify="start" className="ut-mt-1">
              <Link
                href="https://github.com/yuella1219/portfolio_ysy"
                target="_blank"
                rel="noreferrer"
                variant="ghost"
              >
                GitHub
              </Link>
              <Link href="mailto:yuella1219@naver.com" variant="ghost">
                Email
              </Link>
            </FlexBox>
            <Text size="m" color="gray100" weight="light" className="ut-mt-2">
              © 2026. Designed & Developed by Seungyeon.
            </Text>
          </div>
          <Button
            variant="ghost"
            size="medium"
            className={styles.backToTop}
            onClick={() => window.scrollTo({ top: 0 })}
          >
            Back to top
          </Button>
        </FlexBox>
      </footer>
    </>
  );
}
