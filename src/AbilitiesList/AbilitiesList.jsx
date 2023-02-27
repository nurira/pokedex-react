import styles from "./AbilitiesList.module.scss";

export default function AbilitiesList({ abilities }) {
  // console.log("ABILITIES", abilities);

  return (
    <ul className={styles["abilities-list"]}>
      {abilities.map(({ ability }) => (
        <li
          key={ability.name}
          className={ability.is_hidden && styles["hidden-ability"]}
        >
          {ability.name}
        </li>
      ))}
    </ul>
  );
}
