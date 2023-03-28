import {
  ChakraProvider,
  theme,
  Center,
  VStack,
  Heading,
  Box,
} from "@chakra-ui/react";

import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import GameImageDisplay from "./GameImageDisplay";

import GameInput from "./GameInput";
import useCountdown from "@bradgarropy/use-countdown";

const GameScene = () => {
  const [bestSim, setBestSim] = useState(-1);
  const [bestAns, setBsetAns] = useState("");
  const navigate = useNavigate();
  const countdown = useCountdown({
    minutes: 0,
    seconds: 15,
    onCompleted: () =>
      setTimeout(() => {
        navigate("/Result", { state: { score: bestSim * 100, submitText: bestAns } });
      }, 3000),
  });
  const timeLeft = countdown.minutes * 60 + countdown.seconds;
  const padTime = String(timeLeft).padStart(2, "0");

  return (
    <ChakraProvider theme={theme}>
      <Box pos="absolute" top="0" left="20">
        <Heading fontSize={96}>
          {timeLeft === 0 ? "finished!" : padTime}
        </Heading>
      </Box>
      <VStack h={800} justify='center'>
        <GameImageDisplay />
        <GameInput
          setBestSimState={(val:any)=>setBestSim(val)}
          setBestAnsState={(val:any)=>setBsetAns(val)}
        />
      </VStack>
    </ChakraProvider>
  );
};

export default GameScene;
