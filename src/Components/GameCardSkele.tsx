import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkele = () => {
  return (
    <Card>
      <Skeleton height="250px">
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default GameCardSkele;
