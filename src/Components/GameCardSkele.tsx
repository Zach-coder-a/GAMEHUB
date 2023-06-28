import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkele = () => {
  return (
    <Card width="200px" borderRadius={15} overflow="hidden">
      <Skeleton height="250px">
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default GameCardSkele;
