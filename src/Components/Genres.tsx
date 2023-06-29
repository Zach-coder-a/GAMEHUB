import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedUrl from "../services/imageUrl";

const Genres = () => {
  const { data, error } = useGenres();

  return (
    <>
      {error && <Text>{error}</Text>}
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
    </>
  );
};

export default Genres;
