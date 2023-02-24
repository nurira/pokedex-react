import Elevate from "../Elevate";

import styles from "./MainScreen.module.scss";

export default function MainScreen({ children }) {
  return (
    <Elevate color="white">
      <div className={styles["wrapper"]}>
        <div className={styles["screen"]}>{children}</div>
      </div>
    </Elevate>
  );
}
