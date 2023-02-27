import styles from "./StatGraph.module.scss";

function BarGraph({ stats }) {
  return (
    <div className={styles["bar-graph"]}>
      {stats.map(({ label, value, color }) => (
        <div className={styles["stat"]}>
          <span className={styles["label"]}>{label}</span>
          <div
            className={styles["bar"]}
            style={{ "--bar-length": `${value / 255}px`, "--bar-color": color }}
          ></div>
          <span className={styles["value"]}>{value}</span>
        </div>
      ))}
    </div>
  );
}

function HexGraph({ stats }) {
  return (
    <div className={styles["hex-graph"]}>
      <div className={styles["background"]}></div>
    </div>
  );
}

export default function StatGraph({ statValues, variation = "bar" }) {
  const stats = [
    { key: "hp", label: "HP", color: "red" },
    { key: "attack", label: "ATK", color: "blue" },
    { key: "defense", label: "DEF", color: "green" },
    { key: "speed", label: "SPD", color: "yellow" },
    { key: "special-attack", label: "SP.ATK", color: "pink" },
    { key: "special-defense", label: "SP.DEF", color: "turquoise" },
  ];

  stats.forEach((stat) => (stat.value = statValues[stat.key]));
  console.log("STATS", stats);

  const Graph = variation === "bar" ? BarGraph : HexGraph;
  return <Graph stats={stats} />;
}
