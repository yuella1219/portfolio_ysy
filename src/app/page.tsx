import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Forward Through Craft</h1>
        <p className={styles.description}>
          Web Publisher Portfolio — Nav 컴포넌트가 적용되었습니다.
        </p>
      </div>
    </main>
  );
}
