import {
  Button,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Spacer,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/images-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return null;
  return (
    <>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GenreSkeleton key={skeleton}></GenreSkeleton>
        ))}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
                fontSize="lg"
                variant="link"
                onClick={() => {
                  onSelectGenre(genre);
                }}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
