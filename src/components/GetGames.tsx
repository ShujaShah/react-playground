import useGames from "../hooks/useGames";
import { SimpleGrid, Card, Image, CardBody, Heading } from "@chakra-ui/react";
import GameCardSkeleton from "./GameCardSkeleton";

const GetGames = () => {
  //calling the custom hook
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid columns={3} padding="10px" spacing={10}>
        {/* {isLoading && skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)} */}
        {isLoading && skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <Card width="300px" borderRadius={10} overflow="hidden" key={game.id}>
            <Image src={game.background_image} />
            <CardBody>
              <Heading>{game.name}</Heading>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GetGames;
