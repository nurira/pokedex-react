import styles from "./TypeList.module.scss";

const TYPE_COLORS = {
  normal: "#a8a77a",
  fighting: "#C22E28",
  flying: "#A98FF3",
  poison: "#A33EA1",
  ground: "#E2BF65",
  rock: "#B6A136",
  bug: "#A6B91A",
  ghost: "#735797",
  steel: "#B7B7CE",
  fire: "#EE8130",
  water: "#6390F0",
  grass: "#7AC74C",
  electric: "#F7D02C",
  psychic: "#F95587",
  ice: "#96D9D6",
  dragon: "#6F35FC",
  dark: "#705746",
  fairy: "#D685AD",
  unknown: "",
};

export default function TypeList({ types }) {
  console.log("TYPES", types);

  return (
    <ul className={styles["wrapper"]}>
      {types.map((t) => (
        <li key={t} style={{ "--color": TYPE_COLORS[t] }}>
          {t}
        </li>
      ))}
    </ul>
  );
}
