import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import GetGames from "./components/GetGames";
import Genres from "./components/Genres";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <Genres onSelectedGenre={(genre) => setSelectedGenre(genre)} />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GetGames />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
