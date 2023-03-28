import {
  ChakraProvider,
  theme,
  Center,
  VStack,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import GameImageDisplay from "./GameImageDisplay";

const Result = () => {
  const location = useLocation();

  const [selectId, setSelectId] = useState<{ score: number, submitText: string }>(
    location.state as { score: number, submitText: string }
  );

  const navigate = useNavigate();

  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <Center>
          <GameImageDisplay />
        </Center>
        <Center>
          <Heading fontSize={96}>Your answer: {selectId.submitText}</Heading>
        </Center>
        <Center>
          <Heading fontSize={96}>Score: {selectId.score}</Heading>
        </Center>
        <Center>
          <Button
            onClick={() => navigate("/")}
            colorScheme="green"
            w="full"
            h="full"
            fontSize={64}
          >
            Back to Title
          </Button>
        </Center>
      </VStack>
    </ChakraProvider>
  );
};

export default Result;
