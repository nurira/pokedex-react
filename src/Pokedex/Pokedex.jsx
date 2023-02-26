import StatusLights from "../StatusLights";
import StatGraph from "../StatGraph";
import EvolutionGraph from "../EvolutionGraph";
import MoveList from "../MoveList";
import TypeList from "../TypeList/TypeList";
import AbilitiesList from "../AbilitiesList";
import MainScreen from "../MainScreen";
import DPad from "../DPad";
import MiniScreen from "../MiniScreen";
import Divider from "../Divider";
import SecondaryScreen from "../SecondaryScreen";

import Elevate from "../Elevate";
import { CircleButton, RectButton } from "../Button";

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
              <img className={styles["sprite"]} src={front_default} alt="" />
            </MainScreen>
            <div className={styles["main-controls"]}>
              <CircleButton size={32} color="#1a1a1a" />
              <MiniScreen>
                <p>{pickRandom(flavor_texts).flavor_text}</p>
              </MiniScreen>
              <DPad />
            </div>
          </div>
        </div>
      </Elevate>
      <Divider />
      <Elevate color="var(--red-darker)">
        <div className={`${styles["panel"]} ${styles["right"]}`}>
          <div className={styles["content"]}>
            <SecondaryScreen>
              <h1>
                {id} {name}
              </h1>
              <div>
                <TypeList types={types} />
              </div>
              <div>
                <p>Base Experience: {base_experience}</p>
                <p>Height: {height}</p>
                <p>Weight: {weight}</p>
              </div>
            </SecondaryScreen>
            <div className={styles["functions"]}>
              <RectButton height={32} width={60} color="var(--blue)" />
              <RectButton height={32} width={60} color="var(--blue)" />
              <RectButton height={32} width={60} color="var(--blue)" />
              <RectButton height={32} width={60} color="var(--blue)" />
              <RectButton height={32} width={60} color="var(--blue)" />
              <RectButton height={32} width={60} color="var(--blue)" />
              <RectButton height={32} width={60} color="var(--blue)" />
              <RectButton height={32} width={60} color="var(--blue)" />
              <RectButton height={32} width={60} color="var(--blue)" />
              <RectButton height={32} width={60} color="var(--blue)" />
            </div>
            {/* <div>
              STATS
              <StatGraph statValues={stats} variation="bar" />
              <StatGraph statValues={stats} variation="hex" />
            </div>
            <div>
              MOVE LIST
              <MoveList moves={moves} />
            </div>
            <div>
              EVOLUTION GRAPH
              <EvolutionGraph evolutions={evolutions} />
            </div>
            <div>
              ABILITIES
              <AbilitiesList abilities={abilities} />
            </div> */}
          </div>
        </div>
      </Elevate>
    </div>
  );
}

export default React.memo(Pokedex);
