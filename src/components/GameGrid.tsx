import {
  PinInputDescendantsProvider,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContiner from "./GameCardContiner";
import { Genre } from "../hooks/useGenres";
// import { Platforms } from "../hooks/usePlatforms";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContiner key={skeleton}>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContiner>
          ))}
        {data.map((game) => (
          <GameCardContiner key={game.id}>
            <GameCard game={game}></GameCard>
          </GameCardContiner>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
