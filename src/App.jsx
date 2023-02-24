import SearchForm from "./SearchForm";
import Spinner from "./Spinner";
import Pokedex from "./Pokedex";

import getPokeData, { getEvoData } from "./api/get-poke-data";

import styles from "./App.module.scss";

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [status, setStatus] = React.useState("idle");
  const [pokeData, setPokeData] = React.useState(null);
  const [speciesData, setSpeciesData] = React.useState(null);
  const [evolutionData, setEvolutionData] = React.useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("FORM SUBMIT", searchTerm);

    try {
      setStatus("loading");
      const poke_data = await getPokeData("pokemon", searchTerm);
      const species_data = await getPokeData("pokemon-species", poke_data.id);
      const evo_data = await getEvoData(species_data.evolution_chain.url);

      setPokeData(poke_data);
      setSpeciesData(species_data);
      setEvolutionData(evo_data);
      setStatus("success");
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  }

  return (
    <div className={styles["wrapper"]}>
      <SearchForm
        handleSubmit={handleSubmit}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {status === "success" && (
        <Pokedex
          pokemonData={pokeData}
          species={speciesData}
          evolutions={evolutionData}
        />
      )}
      {status === "error" && <div>Error fetching data.</div>}
    </div>
  );
}

export default App;
