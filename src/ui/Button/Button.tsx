import { forwardRef } from "react";
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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      children,
      className,
      onClick,
      variant = "default",
      size = "medium",
      disabled = false,
      type = "button",
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
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
  },
);
