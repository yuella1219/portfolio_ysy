import React from "react";
import clsx from "clsx";
import styles from "./Text.module.scss";

interface TextProps {
  size: "xxl" | "xl" | "l" | "m" | "s";
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
  as?: "p" | "span" | "div";
  color?: "white" | "black" | "gray100" | "gray200" | "link";
}

export const Text = ({
  size,
  children,
  className,
  align = "left",
  as = "p",
  color = "white",
}: TextProps) => {
  const Tag = as as React.ElementType;
  return (
    <Tag
      className={clsx(
        styles.root,
        styles[`size${size}`],
        styles[align],
        styles[color],
        className,
      )}
    >
      {children}
    </Tag>
  );
};
