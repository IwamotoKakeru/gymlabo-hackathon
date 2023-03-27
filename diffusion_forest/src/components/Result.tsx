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
    <ChakraProvider theme={theme}>
      <VStack>
        <Center h="520">
          <Heading fontSize={128}>Score: {selectId.score}</Heading>
        </Center>
        <Button
          onClick={() => navigate("/")}
          colorScheme="green"
          w="full"
          h="full"
          fontSize={64}
        >
          Start
        </Button>
      </VStack>
    </ChakraProvider>
  );
};

export default Result;
