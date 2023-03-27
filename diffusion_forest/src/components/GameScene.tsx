import { useNavigate } from "react-router-dom";
import {
  ChakraProvider,
  theme,
  Center,
  VStack,
  Heading,
  Box,
} from "@chakra-ui/react";
import GameTimer from "./Timer";

const GameScene = () => {
  const navigate = useNavigate();

  return (
    <ChakraProvider theme={theme}>
      <Box pos="absolute" top="0" left="20"><GameTimer /></Box>
      <VStack>
        <Center h="520">
          <Heading fontSize={128}>Game</Heading>
        </Center>
      </VStack>
    </ChakraProvider>
  );
};

export default GameScene;
