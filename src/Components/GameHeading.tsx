import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Mayo Games`;

  return (
    <Heading as="h1" fontSize="5xl" paddingLeft={9} paddingBottom={4}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
