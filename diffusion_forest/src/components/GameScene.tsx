import {
  ChakraProvider,
  theme,
  Center,
  VStack,
  Heading,
} from "@chakra-ui/react";

import GameInput from "./GameInput";

const GameScene = () => {
  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <Center h="520">
          <Heading fontSize={128}>Game</Heading>
        </Center>
        <Center h="520">
          <GameInput />
        </Center>
      </VStack>
    </ChakraProvider>
  );
};

export default GameScene;
