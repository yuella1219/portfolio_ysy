import styles from "./Project.module.scss";
import { Text, Heading } from "@ui/index";
import type { ProjectDataProps } from "@data/index";
import clsx from "clsx";

export const ProjectCard = ({
  data,
  onClick,
  variant = "default",
}: {
  data: ProjectDataProps;
  onClick: () => void;
  variant?: "default" | "detail";
}) => {
  const Tag = variant === "detail" ? "div" : "button";

  return (
    <Tag
      className={clsx(styles.card, variant === "detail" && styles.detail)}
      onClick={onClick}
    >
      {variant === "detail" && (
        <span className={styles.cardBack} aria-hidden="true" />
      )}
      <span className={styles.cardFront}>
        <span className={styles.itemHead}>
          <Text size="xl" color="gray200" as="strong">
            {data.posNm}
          </Text>
          <Text size="m" color="gray100" as="span">
            {"[" + data.startDt + " - " + data.endDt + "]"}
          </Text>
        </span>
        <span className={styles.itemBody}>
          <Heading size="5" as="strong">
            {data.proNm}
          </Heading>
          <Text size="xl" as="span">
            {data.clientNm}
          </Text>
        </span>
        <Text size="m" color="gray100" align="right">
          {variant === "default" ? "Show Detail +" : "Click to Close -"}
        </Text>
      </span>
    </Tag>
  );
};
