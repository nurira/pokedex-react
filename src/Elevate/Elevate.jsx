import styles from "./Elevate.module.scss";

export default function Elevate({
  color = "black",
  borderColor = "hsl(0deg 0% 0% / 1)",
  children,
}) {
  return (
    <div
      className={styles["wrapper"]}
      style={{
        "--color": color,
        "--border-color": borderColor,
      }}
    >
      {children}
    </div>
  );
}
