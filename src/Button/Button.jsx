import styles from "./Button.module.scss";

export function CircleButton({ className = "", size, color, ...delegated }) {
  return (
    <button
      className={`${styles["circle-button"]} ${className}`}
      style={{
        "--size": size + "px",
        "--color": color,
      }}
      {...delegated}
    />
  );
}

export function RectButton({
  className = "",
  height,
  width,
  color,
  ...delegated
}) {
  return (
    <button
      className={`${styles["rect-button"]} ${className}`}
      style={{
        "--height": height + "px",
        "--width": width + "px",
        "--color": color,
      }}
      {...delegated}
    />
  );
}
