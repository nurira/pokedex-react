import styles from "./AbilitiesList.module.scss";

export default function AbilitiesList({ abilities }) {
  console.log("ABILITIES", abilities);
  return (
    <div className={styles["wrapper"]}>
      <ul>
        {abilities.map(({ ability }) => (
          <li key={ability.name}>{ability.name}</li>
        ))}
      </ul>
    </div>
  );
}
