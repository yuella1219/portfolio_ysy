import React from "react";
import clsx from "clsx";
import styles from "./Text.module.scss";

interface TextProps {
  size?: "xxl" | "xl" | "l" | "m" | "s";
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
  as?: "p" | "span" | "strong" | "b";
  color?: "white" | "black" | "gray100" | "gray200" | "link";
  weight?: "light" | "regular" | "medium" | "bold";
}

export const Text = ({
  size = "m",
  children,
  className,
  align = "left",
  as = "p",
  color = "gray200",
  weight = "regular",
}: TextProps) => {
  const Tag = as as React.ElementType;
  return (
    <Tag
      className={clsx(
        styles.root,
        styles[`size${size}`],
        styles[align],
        styles[color],
        styles[weight],
        className,
      )}
    >
      {children}
    </Tag>
  );
};
