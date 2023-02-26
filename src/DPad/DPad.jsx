import { CircleButton } from "../Button";

import styles from "./DPad.module.scss";

export default function DPad() {
  return (
    <div className={styles["d-pad"]}>
      <div className={styles["up"]}>
        <CircleButton size={28} color="#1a1a1a" />
      </div>
      <div className={styles["down"]}>
        <CircleButton size={28} color="#1a1a1a" />
      </div>
      <div className={styles["left"]}>
        <CircleButton size={28} color="#1a1a1a" />
      </div>
      <div className={styles["right"]}>
        <CircleButton size={28} color="#1a1a1a" />
      </div>
    </div>
  );
}
