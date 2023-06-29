import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedUrl from "../services/imageUrl";

const Genres = () => {
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default Genres;
