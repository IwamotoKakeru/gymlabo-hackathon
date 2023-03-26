import React from "react";
import {
  ChakraProvider,
  theme,
  Button,
  Box,
  Center,
  VStack,
  Heading,
} from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <Center h="520">
          <Heading fontSize={128}>Diffusion Forest</Heading>
        </Center>
        <Center>
          <Button colorScheme="green" w="full" h="full" fontSize={64}>
            Start
          </Button>
        </Center>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
