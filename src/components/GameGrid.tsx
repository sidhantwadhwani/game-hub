import {
  PinInputDescendantsProvider,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContiner from "./GameCardContiner";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContiner>
              <GameCardSkeleton key={skeleton}></GameCardSkeleton>
            </GameCardContiner>
          ))}
        {games.map((game) => (
          <GameCardContiner>
            <GameCard key={game.id} game={game}></GameCard>
          </GameCardContiner>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
