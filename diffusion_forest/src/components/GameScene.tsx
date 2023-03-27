import {
  ChakraProvider,
  theme,
  Center,
  VStack,
  Heading,
  Box,
} from "@chakra-ui/react";
import GameTimer from "./Timer";
import GameImageDisplay from "./GameImageDisplay";

import GameInput from "./GameInput";

const GameScene = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box pos="absolute" top="0" left="20"><GameTimer /></Box>
      <VStack>
        <Center>
          <GameImageDisplay/>
        </Center>
        <Center h="520">
          <GameInput />
        </Center>
      </VStack>
    </ChakraProvider>
  );
};

export default GameScene;
