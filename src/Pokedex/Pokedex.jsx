import StatusLights from "../StatusLights";
import StatGraph from "../StatGraph";
import EvolutionGraph from "../EvolutionGraph";
import MoveList from "../MoveList";
import TypeList from "../TypeList/TypeList";
import AbilitiesList from "../AbilitiesList";
import MainScreen from "../MainScreen";
import Elevate from "../Elevate";

import pickRandom from "../util/pickRandom";

import styles from "./Pokedex.module.scss";

function Pokedex({ pokemonData, species, evolutions }) {
  const {
    id,
    name,
    height,
    weight,
    base_experience,
    sprites: { front_default },
    moves,
    abilities,
  } = pokemonData;

  const stats = {};
  pokemonData.stats.forEach((stat) => (stats[stat.stat.name] = stat.base_stat));
  console.log("STATS", stats);

  const flavor_texts = species.flavor_text_entries.filter(
    (ft) => ft.language.name === "en"
  );
  console.log("EN FLAVOR TEXTS", flavor_texts);

  const types = pokemonData.types.map((type) => type.type.name);

  return (
    <div className={styles["wrapper"]}>
      <Elevate color="var(--red-darker)">
        <div className={`${styles["panel"]} ${styles["left"]}`}>
          <Elevate color="var(--red-darker)">
            <div className={styles["status-bar"]}>
              <StatusLights />
            </div>
          </Elevate>
          <div className={styles["content"]}>
            <MainScreen>
              <h1>
                {id} {name}
              </h1>
              <div>
                <TypeList types={types} />
              </div>
              <div>
                <img src={front_default} alt="" />
              </div>
            </MainScreen>

            <div>
              <p>{pickRandom(flavor_texts).flavor_text}</p>
            </div>
            <div>
              EVOLUTION GRAPH
              <EvolutionGraph evolutions={evolutions} />
            </div>
            <div>
              ABILITIES
              <AbilitiesList abilities={abilities} />
            </div>
          </div>
        </div>
      </Elevate>
      <Elevate color="darkred">
        <div className={`${styles["panel"]} ${styles["right"]}`}>
          <div>
            <p>Base Experience: {base_experience}</p>
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
          </div>
          <div>
            STATS
            <StatGraph statValues={stats} variation="bar" />
            {/* <StatGraph statValues={stats} variation="hex" /> */}
          </div>
          <div>
            MOVE LIST
            <MoveList moves={moves} />
          </div>
        </div>
      </Elevate>
    </div>
  );
}

export default React.memo(Pokedex);
