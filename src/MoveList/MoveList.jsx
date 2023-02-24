import styles from "./MoveList.module.scss";

export default function MoveList({ moves }) {
  console.log("MOVES", moves);

  return (
    <div className={styles["wrapper"]}>
      <ul>
        {moves.map(({ move }) => (
          <li key={move.name}>{move.name}</li>
        ))}
      </ul>
    </div>
  );
}
