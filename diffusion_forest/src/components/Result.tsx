import {
  ChakraProvider,
  theme,
  Center,
  VStack,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { PromptTextContext } from "../App";
import GameImageDisplay from "./GameImageDisplay";

const Result = () => {
  const location = useLocation();

  const [selectId, setSelectId] = useState<{
    score: number;
    submitText: string;
  }>(location.state as { score: number; submitText: string });

  const { promptText, setPromptText } = useContext(PromptTextContext);
  const { bestText, setBestText } = useContext(PromptTextContext);
  const { bestSim, setBestSim } = useContext(PromptTextContext);

  const navigate = useNavigate();

  const OnClickHandler = () => {
    setBestText("");
    setBestSim(-1.0);
    navigate("/");
  };

  return (
      <VStack>
        <Center>
          <GameImageDisplay />
        </Center>
        <Center>
          <Heading fontSize={96}>Your answer: {bestText}</Heading>
        </Center>
        <Center h="520">
          <Heading fontSize={128} color='white'>Score: {bestSim * 100}%</Heading>
        </Center>
        <Center>
          <Button
            onClick={OnClickHandler}
            colorScheme="green"
            w="full"
            h="full"
            fontSize={64}
          >
            Back to Title
          </Button>
        </Center>
      </VStack>
  );
};

export default Result;
