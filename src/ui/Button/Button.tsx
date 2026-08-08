import React from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  children,
  className,
  onClick,
  variant = "default",
  size = "medium",
  disabled = false,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        styles.root,
        className,
        styles[variant],
        styles[size],
        disabled && styles.disabled,
      )}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};
