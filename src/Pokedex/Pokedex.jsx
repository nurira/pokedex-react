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

function Pokedex({ pokemonData, species, evolutions, status }) {
  const stats = {};
  pokemonData?.stats.forEach(
    (stat) => (stats[stat.stat.name] = stat.base_stat)
  );
  console.log("STATS", stats);

  const flavor_texts = species?.flavor_text_entries.filter(
    (ft) => ft.language.name === "en"
  );
  console.log("EN FLAVOR TEXTS", flavor_texts);

  const types = pokemonData?.types.map((type) => type.type.name);

  return (
    <div className={styles["wrapper"]}>
      <Elevate color="var(--red-darker)">
        <div className={`${styles["panel"]} ${styles["left"]}`}>
          <Elevate color="var(--red-darker)">
            <div className={styles["status-bar"]}>
              <StatusLights status={status} />
            </div>
          </Elevate>
          <div className={styles["content"]}>
            <MainScreen>
              {status === "success" && (
                <img
                  className={styles["sprite"]}
                  src={pokemonData.sprites.front_default}
                  alt=""
                />
              )}
              {status === "error" && <p>Error fetching data.</p>}
            </MainScreen>
            <div className={styles["main-controls"]}>
              <CircleButton size={32} color="#1a1a1a" />
              <MiniScreen>
                {status === "success" && (
                  <p>{pickRandom(flavor_texts).flavor_text}</p>
                )}
              </MiniScreen>
              <DPad />
            </div>
          </div>
        </div>
      </Elevate>
      <Divider />
      <Elevate color="var(--red-darker)">
        <div className={styles["right-panel-border-top"]} />
        <div className={`${styles["panel"]} ${styles["right"]}`}>
          <div className={styles["content"]}>
            <SecondaryScreen>
              {status === "success" && (
                <>
                  <h1>
                    {pokemonData.id} {pokemonData.name}
                  </h1>
                  <div>
                    <TypeList types={types} />
                  </div>
                  <div>
                    <p>Base Experience: {pokemonData.base_experience}</p>
                    <p>Height: {pokemonData.height}</p>
                    <p>Weight: {pokemonData.weight}</p>
                  </div>
                </>
              )}
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
            <div className={styles["secondary-controls"]}>
              <RectButton height={32} width={48} color="white" />
              <RectButton height={32} width={48} color="white" />
            </div>
            {/* <div>
              STATS
              <StatGraph statValues={stats} variation="bar" />
              <StatGraph statValues={stats} variation="hex" />
            </div>
            <div>
              MOVE LIST
              <MoveList moves={pokemonData.moves} />
            </div>
            <div>
              EVOLUTION GRAPH
              <EvolutionGraph evolutions={pokemonData.evolutions} />
            </div>
            <div>
              ABILITIES
              <AbilitiesList abilities={pokemonData.abilities} />
            </div> */}
          </div>
        </div>
      </Elevate>
    </div>
  );
}

export default React.memo(Pokedex);
