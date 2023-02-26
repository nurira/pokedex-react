import styles from "./SecondaryScreen.module.scss";

export default function SecondaryScreen({ children }) {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["screen"]}>{children}</div>
    </div>
  );
}
