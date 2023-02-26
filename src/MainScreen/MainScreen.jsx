import Elevate from "../Elevate";
import { CircleButton } from "../Button";

import useToggle from "../hooks/useToggle";

import styles from "./MainScreen.module.scss";

export default function MainScreen({ children }) {
  const [screenIsOn, toggleScreen] = useToggle(true);

  return (
    <Elevate color="white">
      <div className={styles["wrapper"]}>
        <div className={styles["left-buttons"]}>
          <CircleButton
            size={28}
            color="var(--red-dark)"
            onClick={toggleScreen}
          />
        </div>

        <div
          className={styles["screen"]}
          style={{
            "--bgColor": screenIsOn ? "hsl(80, 61%, 50%)" : "hsl(0deg 0% 10%)",
          }}
        >
          {screenIsOn && children}
        </div>
        <div className={styles["speaker-slots"]}>
          <div className={styles["slot"]}></div>
          <div className={styles["slot"]}></div>
          <div className={styles["slot"]}></div>
          <div className={styles["slot"]}></div>
        </div>
        <div className={styles["top-buttons"]}>
          <CircleButton size={12} color="var(--red-dark)" />
          <CircleButton size={12} color="var(--red-dark)" />
        </div>
      </div>
    </Elevate>
  );
}
