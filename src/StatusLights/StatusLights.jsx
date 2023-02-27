import styles from "./StatusLights.module.scss";

export function Light({
  size = "24px",
  color = "black",
  bezelSize = "10px",
  bezelColor = "white",
  active,
}) {
  return (
    <div
      className={`${styles["status-light"]}`}
      style={{
        "--color": color,
        "--size": size,
        "--bezel-size": bezelSize,
        "--bezel-color": bezelColor,
        "--brightness": active ? "1.5" : "0.8",
      }}
    />
  );
}

export default function StatusLights({ status }) {
  return (
    <div className={styles["wrapper"]}>
      <Light size="72px" color="cyan" active={status === "idle"} />
      <Light size="36px" color="red" active={status === "error"} />
      <Light size="36px" color="yellow" active={status === "loading"} />
      <Light size="36px" color="green" active={status === "success"} />
    </div>
  );
}
