import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ChakraProvider,
  theme,
  Button,
  Center,
  VStack,
  Heading,
} from "@chakra-ui/react";

const Title = () => {
  const navigate = useNavigate();
  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <Center h="520">
          <Heading fontSize={128}>Diffusion Forest</Heading>
        </Center>
        <Center>
          <Button
            onClick={() => navigate("/StartCountdown")}
            colorScheme="green"
            w="full"
            h="full"
            fontSize={64}
          >
            Start
          </Button>
        </Center>
      </VStack>
    </ChakraProvider>
  );
};

export default Title;
