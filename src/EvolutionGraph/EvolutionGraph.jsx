import styles from "./EvolutionGraph.module.scss";

export default function EvolutionGraph({ evolutions }) {
  const root = evolutions.chain;

  console.log("EVOLUTIONS", evolutions);
  return <EvolutionNode node={root} />;
}

function EvolutionNode({ node }) {
  return (
    <div className={styles["wrapper"]}>
      {node.species.name}
      {node.evolves_to.length > 0 && (
        <div className={styles["evolution"]}>
          {node.evolves_to.map((n) => (
            <EvolutionNode key={n.species.name} node={n} />
          ))}
        </div>
      )}
    </div>
  );
}
