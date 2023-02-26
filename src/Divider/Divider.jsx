import Elevate from "../Elevate";

import styles from "./Divider.module.scss";

export default function Divider() {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["bar"]} />
      <div className={styles["circle"]} />
    </div>
  );
}
