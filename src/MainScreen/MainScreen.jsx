import styles from "./MainScreen.module.scss";

export default function MainScreen({ children }) {
  return (
    <div className={styles["bezel"]}>
      <div className={styles["screen"]}>{children}</div>
    </div>
  );
}
