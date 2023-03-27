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
      <Box pos="absolute" top="0" left="20">
        <GameTimer />
      </Box>
      <VStack h="100%" justify="center" bg="gray.100">
        <Box>
          <GameImageDisplay />
          <GameInput />
        </Box>
      </VStack>
    </ChakraProvider>
  );
};

export default GameScene;
