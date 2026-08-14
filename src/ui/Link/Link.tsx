"use client";

import { forwardRef } from "react";
import NextLink from "next/link";
import styles from "./Link.module.scss";
import clsx from "clsx";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "underline" | "default";
}

export const Link = forwardRef<
  React.ComponentRef<typeof NextLink>,
  LinkProps
>(function Link(
  { href, children, className, variant = "default", ...props },
  ref,
) {
  return (
    <NextLink
      ref={ref}
      href={href}
      className={clsx(styles.root, className, variant && styles[variant])}
      {...props}
    >
      {children}
    </NextLink>
  );
});
