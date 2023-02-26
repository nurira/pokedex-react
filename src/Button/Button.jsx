import styles from "./Button.module.scss";

export function CircleButton({ size, color, ...delegated }) {
  return (
    <button
      className={styles["circle-button"]}
      style={{
        "--size": size + "px",
        "--color": color,
      }}
      {...delegated}
    />
  );
}

export function RectButton({ height, width, color, ...delegated }) {
  return (
    <button
      className={styles["rect-button"]}
      style={{
        "--height": height + "px",
        "--width": width + "px",
        "--color": color,
      }}
      {...delegated}
    />
  );
}
