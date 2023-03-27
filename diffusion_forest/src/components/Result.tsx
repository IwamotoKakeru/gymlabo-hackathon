import {
  ChakraProvider,
  theme,
  Center,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { useLocation } from "react-router-dom"

const Result = () =>  {
  const location = useLocation();
  const [selectId, setSelectId]
  = useState<{score: number}>(location.state as {score: number});
  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <Center h="520">
          <Heading fontSize={128}>Score: {selectId.score}</Heading>
        </Center>
      </VStack>
    </ChakraProvider>
  );
}

export default Result;
