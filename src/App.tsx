import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="main">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;

// Version - 5 - Installing Chakra UI.mp4

// import { Button, ButtonGroup } from "@chakra-ui/react";

// function App() {
//   return <Button colorScheme="blue">Button</Button>;
// }

// export default App;
