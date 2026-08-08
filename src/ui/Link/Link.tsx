"use client";

import NextLink from "next/link";
import styles from "./Link.module.scss";
import clsx from "clsx";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "underline" | "default";
}

export const Link = ({
  href,
  children,
  className,
  variant = "default",
  ...props
}: LinkProps) => {
  return (
    <NextLink
      href={href}
      className={clsx(styles.root, className, variant && styles[variant])}
      {...props}
    >
      {children}
    </NextLink>
  );
};
