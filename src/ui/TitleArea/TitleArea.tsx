import styles from "./TitleArea.module.scss";
import { Text, Heading } from "@/ui";
import { useDeviceSize } from "@/hooks";
import { forwardRef } from "react";

interface TitleAreaProps {
  category: string;
  title: string;
  description: React.ReactNode;
}

export const TitleArea = forwardRef<HTMLDivElement, TitleAreaProps>(
  ({ category, title, description }, ref) => {
    const { isLaptop } = useDeviceSize();

    return (
      <div className={styles.root} ref={ref}>
        <div className={styles.title}>
          <Text size={isLaptop ? "xxl" : "l"} weight="light" color="gray100">
            {"[" + " " + category + " " + "]"}
          </Text>
          <Heading size="4" as="h3">
            {title}
          </Heading>
        </div>
        <Heading size={isLaptop ? "2" : "4"} as="strong">
          {description}
        </Heading>
      </div>
    );
  },
);
