import styles from "./StatusLights.module.scss";

function Light({
  size = "24px",
  color = "black",
  bezelSize = "8px",
  bezelColor = "white",
}) {
  return (
    <div
      className={`${styles["status-light"]}`}
      style={{
        "--color": color,
        "--size": size,
        "--bezelSize": bezelSize,
        "--bezelColor": bezelColor,
      }}
    />
  );
}

export default function StatusLights() {
  return (
    <div className={styles["wrapper"]}>
      <Light size="64px" color="lightblue" />
      <Light size="36px" color="red" />
      <Light size="36px" color="yellow" />
      <Light size="36px" color="green" />
    </div>
  );
}
