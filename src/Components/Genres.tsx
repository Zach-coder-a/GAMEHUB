import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedUrl from "../services/imageUrl";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const Genres = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const spinners = [];
  for (let i = 0; i < 20; i++) {
    spinners.push(i);
  }

  if (error) return null;

  if (isLoading)
    return (
      <>
        {spinners.map((spinner) => (
          <Skeleton
            height="32px"
            width="200px"
            key={spinner}
            margin="5px"
            borderRadius={8}
          >
            <SkeletonText />
          </Skeleton>
        ))}
      </>
    );

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              src={getCroppedUrl(genre.image_background)}
              borderRadius={8}
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              fontSize="lg"
              variant="link"
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default Genres;