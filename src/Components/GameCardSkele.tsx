import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkele = () => {
  return (
    <Card height="250px">
      <Skeleton>
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default GameCardSkele;
