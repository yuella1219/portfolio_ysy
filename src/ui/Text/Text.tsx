import { createElement, forwardRef } from "react";
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

export const Text = forwardRef<HTMLElement, TextProps>(function Text(
  {
    size = "m",
    children,
    className,
    align = "left",
    as = "p",
    color = "gray200",
    weight = "regular",
  },
  ref,
) {
  return createElement(
    as,
    {
      ref,
      className: clsx(
        styles.root,
        size !== "m" && styles[`size${size}`],
        align !== "left" && styles[align],
        color !== "white" && styles[color],
        weight !== "regular" && styles[weight],
        className,
      ),
    },
    children,
  );
});
