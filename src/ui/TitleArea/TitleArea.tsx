import styles from "./TitleArea.module.scss";
import { Text, Heading } from "@/ui";

interface TitleAreaProps {
  category: string;
  title: string;
  description: React.ReactNode;
}

export const TitleArea = ({ category, title, description }: TitleAreaProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <Text size="xxl" weight="light" color="gray100">
          {"[" + " " + category + " " + "]"}
        </Text>
        <Heading size="4" as="h3">
          {title}
        </Heading>
      </div>
      <Heading size="2" as="strong">
        {description}
      </Heading>
    </div>
  );
};
