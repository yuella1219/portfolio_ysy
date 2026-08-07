import React from "react";
import clsx from "clsx";
import styles from "./Heading.module.scss";

interface HeadingProps {
  size: "1" | "2" | "3" | "4" | "5";
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
  as?: "h2" | "h3" | "h4" | "h5" | "h6" | "strong";
  color?: "white" | "black" | "gray100" | "gray200" | "link";
}

export const Heading = ({
  size,
  children,
  className,
  align = "left",
  as = "h2",
  color = "white",
}: HeadingProps) => {
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
