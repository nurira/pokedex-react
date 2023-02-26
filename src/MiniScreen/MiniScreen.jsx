import { RectButton } from "../Button";

import styles from "./MiniScreen.module.scss";

export default function MiniScreen({ children }) {
  return (
    <div className={styles["mini-screen-wrapper"]}>
      <div className={styles["mini-screen-controls"]}>
        <RectButton
          height={8}
          width={64}
          variant="rect"
          color="var(--red-light)"
        />
        <RectButton height={8} width={64} variant="rect" color="var(--blue)" />
      </div>
      <div className={styles["mini-screen"]}>{children}</div>
    </div>
  );
}
