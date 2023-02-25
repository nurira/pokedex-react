import styles from "./Button.module.scss";

export default function Button({
  variant = "circle",
  size,
  color,
  ...delegated
}) {
  return (
    <button
      className={styles["wrapper"]}
      style={{ "--size": `${size}px`, "--color": color }}
      {...delegated}
    />
  );
}
