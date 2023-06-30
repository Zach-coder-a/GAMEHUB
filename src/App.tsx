import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Games from "./Components/Games";
import Genres from "./Components/Genres";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";

const App = () => {
  const [selectedGenre, setSetselectedGenre] = useState<Genre | null>(null);

  return (
    <div>
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
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5} paddingY="32px">
            <Genres
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSetselectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <Games selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
