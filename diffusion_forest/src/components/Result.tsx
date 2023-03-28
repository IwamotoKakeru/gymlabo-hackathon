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

const Result = () => {
  const location = useLocation();

  const [selectId, setSelectId] = useState<{ score: number }>(
    location.state as { score: number }
  );

  const navigate = useNavigate();

  return (
      <VStack>
        <Center h="520">
          <Heading fontSize={128} color='white'>Score: {selectId.score}</Heading>
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
  );
};

export default Result;
