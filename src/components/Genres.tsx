import useGenre, { Genre } from "../hooks/useGenres";
import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}
const Genres = ({ onSelectedGenre }: Props) => {
  const { genres, isLoading } = useGenre();
  if (isLoading) return <Spinner />;
  return (
    <>
      {isLoading && <Spinner />}
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image boxSize="32px" borderRadius={8} src={genre.image_background} />
              <Button onClick={() => onSelectedGenre(genre)} variant="link">
                {" "}
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Genres;
