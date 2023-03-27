import {
  ChakraProvider,
  theme,
  Center,
  VStack,
  Heading,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import GameInput from "./GameInput";
import useCountdown from "@bradgarropy/use-countdown";

const GameScene = () => {
  const navigate = useNavigate();
  const countdown = useCountdown({
    minutes:1,
    seconds:0,
    onCompleted: () => setTimeout(() => {navigate("/Result",{state: {score:100}})},3000)
  });
  const timeLeft = countdown.minutes * 60 + countdown.seconds;
  const padTime = String(timeLeft).padStart(2,'0');

  return (
    <ChakraProvider theme={theme}>
      <Box pos="absolute" top="0" left="20">
        <Heading fontSize={96}>{timeLeft===0 ? "finished!" : padTime}</Heading>
      </Box>
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
