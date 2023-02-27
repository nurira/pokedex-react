import styles from "./MoveList.module.scss";

export default function MoveList({ moves }) {
  console.log("MOVES", moves);

  return (
    <ul className={styles["move-list"]}>
      {moves.map(({ move }) => (
        <li key={move.name}>{move.name}</li>
      ))}
    </ul>
  );
}
