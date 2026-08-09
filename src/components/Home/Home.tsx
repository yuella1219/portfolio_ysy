import styles from "./Home.module.scss";

export function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.grid} aria-hidden="true">
        <span className={styles.gridLineV} />
        <div className={styles.gridLinesH}>
          <span />
          <span />
          <span />
        </div>
      </div>

      <section className={styles.hero}>
        <h1 className={styles.headline}>
          <span className={styles.lineForward}>Forward</span>
          <span className={styles.lineThrough}>Through</span>
          <span className={styles.lineCraft}>Craft</span>
        </h1>

        <p className={styles.description}>
          디자인을 정확한 화면으로 구현하고, 구조적인 마크업과 유연한 인터랙션으로
          <br />
          웹의 완성도를 높이는 웹 퍼블리셔입니다.
        </p>

        <p className={styles.label}>[ Web Publisher ]</p>
      </section>
    </div>
  );
}
