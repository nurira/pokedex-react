import StatusLights, { Light } from "../StatusLights";
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
import FunctionButtons from "../FunctionButtons";

import Elevate from "../Elevate";
import { CircleButton, RectButton } from "../Button";

import pickRandom from "../util/pickRandom";

import styles from "./Pokedex.module.scss";

function Pokedex({ pokemonData, species, evolutions, status }) {
  const [activeFunction, setActiveFunction] = React.useState(0);
  const [activeFlavorText, setActiveFlavorText] = React.useState(0);

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
                  <p>{flavor_texts[activeFlavorText].flavor_text}</p>
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
                  {activeFunction === 0 && (
                    <div className={styles["basic-information"]}>
                      <h1>
                        {pokemonData.id} {pokemonData.name}
                      </h1>
                      <TypeList types={types} />
                      <div className={styles["information"]}>
                        <p>Base Experience: {pokemonData.base_experience}</p>
                        <p>Height: {pokemonData.height}</p>
                        <p>Weight: {pokemonData.weight}</p>
                      </div>
                    </div>
                  )}
                  {activeFunction === 1 && (
                    <>
                      <h1>STATS</h1>
                      <StatGraph statValues={stats} variation="bar" />
                      {/* <StatGraph statValues={stats} variation="hex" /> */}
                    </>
                  )}
                  {activeFunction === 2 && (
                    <>
                      <h1>MOVE LIST</h1>
                      <MoveList moves={pokemonData.moves} />
                    </>
                  )}
                  {activeFunction === 3 && (
                    <div>
                      EVOLUTION GRAPH
                      <EvolutionGraph evolutions={evolutions} />
                    </div>
                  )}
                  {activeFunction === 4 && (
                    <div>
                      ABILITIES
                      <AbilitiesList abilities={pokemonData.abilities} />
                    </div>
                  )}
                </>
              )}
            </SecondaryScreen>
            <FunctionButtons onClick={setActiveFunction} />
            <div className={styles["secondary-controls"]}>
              <div className={styles["row"]}>
                <div>
                  <RectButton height={32} width={64} color="white" />
                  <RectButton height={32} width={64} color="white" />
                </div>
                <div>
                  <RectButton height={12} width={56} color="hsl(0deg 0% 14%)" />
                  <RectButton height={12} width={56} color="hsl(0deg 0% 14%)" />
                </div>
              </div>
              <Light
                color="yellow"
                bezelSize="8px"
                bezelColor="white"
                size="32px"
              />
              <div className={styles["row"]}>
                <div className={styles["aux-screen"]} />
                <div className={styles["aux-screen"]} />
              </div>
            </div>
          </div>
        </div>
      </Elevate>
    </div>
  );
}

export default React.memo(Pokedex);
