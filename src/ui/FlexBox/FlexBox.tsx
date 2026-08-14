import { createElement, forwardRef } from "react";
import clsx from "clsx";
import styles from "./FlexBox.module.scss";

type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
type FlexItems = "stretch" | "start" | "end" | "center" | "baseline";
type FlexAlign = "stretch" | "start" | "end" | "center" | "between" | "around" | "evenly";
type FlexJustify = "start" | "end" | "center" | "between" | "around" | "evenly";
type FlexGap = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "base-x";

interface FlexBoxProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  /** true: inline-flex / false: flex */
  inline?: boolean;
  direction?: FlexDirection;
  wrap?: FlexWrap;
  /** align-items */
  items?: FlexItems;
  /** align-content */
  align?: FlexAlign;
  /** justify-content */
  justify?: FlexJustify;
  gap?: FlexGap;
}

const DIRECTION_CLASS: Record<FlexDirection, string> = {
  row: styles.directionRow,
  "row-reverse": styles.directionRowReverse,
  column: styles.directionColumn,
  "column-reverse": styles.directionColumnReverse,
};

const WRAP_CLASS: Record<FlexWrap, string> = {
  nowrap: styles.wrapNowrap,
  wrap: styles.wrapWrap,
  "wrap-reverse": styles.wrapWrapReverse,
};

const ITEMS_CLASS: Record<FlexItems, string> = {
  stretch: styles.itemsStretch,
  start: styles.itemsStart,
  end: styles.itemsEnd,
  center: styles.itemsCenter,
  baseline: styles.itemsBaseline,
};

const ALIGN_CLASS: Record<FlexAlign, string> = {
  stretch: styles.alignStretch,
  start: styles.alignStart,
  end: styles.alignEnd,
  center: styles.alignCenter,
  between: styles.alignBetween,
  around: styles.alignAround,
  evenly: styles.alignEvenly,
};

const JUSTIFY_CLASS: Record<FlexJustify, string> = {
  start: styles.justifyStart,
  end: styles.justifyEnd,
  center: styles.justifyCenter,
  between: styles.justifyBetween,
  around: styles.justifyAround,
  evenly: styles.justifyEvenly,
};

const GAP_CLASS: Record<FlexGap, string> = {
  1: styles.gap1,
  2: styles.gap2,
  3: styles.gap3,
  4: styles.gap4,
  5: styles.gap5,
  6: styles.gap6,
  7: styles.gap7,
  8: styles.gap8,
  9: styles.gap9,
  10: styles.gap10,
  11: styles.gap11,
  12: styles.gap12,
  "base-x": styles.gapBaseX,
};

export const FlexBox = forwardRef<HTMLElement, FlexBoxProps>(function FlexBox(
  {
    children,
    className,
    as: Component = "div",
    inline = false,
    direction = "row",
    wrap = "nowrap",
    items = "stretch",
    align = "stretch",
    justify = "start",
    gap,
  },
  ref,
) {
  return createElement(
    Component,
    {
      ref,
      className: clsx(
        inline ? styles.inline : styles.root,
        DIRECTION_CLASS[direction],
        WRAP_CLASS[wrap],
        ITEMS_CLASS[items],
        ALIGN_CLASS[align],
        JUSTIFY_CLASS[justify],
        gap !== undefined && GAP_CLASS[gap],
        className,
      ),
    },
    children,
  );
});
