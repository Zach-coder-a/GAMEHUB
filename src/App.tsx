import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem bg="coral" area={"nav"}>
          Nav
        </GridItem>
        <Show above="lg">
          <GridItem bg="gold" area={"aside"}>
            Aside
          </GridItem>
        </Show>
        <GridItem bg="dodgerBlue" area={"main"}>
          Main
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
