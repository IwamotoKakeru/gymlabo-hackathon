import {
  ChakraProvider,
  theme,
  Center,
  VStack,
  Heading,
} from "@chakra-ui/react";
import GameImageDisplay from "./GameImageDisplay";

import GameInput from "./GameInput";

const GameScene = () => {
  return (
    <ChakraProvider theme={theme}>
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
