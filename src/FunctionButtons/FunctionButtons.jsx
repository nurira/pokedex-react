import { RectButton } from "../Button";

import styles from "./FunctionButtons.module.scss";

export default function FunctionButtons({ onClick }) {
  return (
    <div className={styles["functions"]}>
      {Array(10)
        .fill(null)
        .map((_, idx) => (
          <RectButton
            key={idx}
            onClick={() => onClick(idx)}
            className={styles["function"]}
            height={36}
            width={60}
            color={"var(--blue)"}
          />
        ))}
    </div>
  );
}
