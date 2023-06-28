import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const Games = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ol>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ol>
    </>
  );
};

export default Games;
