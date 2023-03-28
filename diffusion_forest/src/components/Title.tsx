import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ChakraProvider,
  theme,
  Button,
  Center,
  VStack,
  Heading,
  Box,
} from "@chakra-ui/react";

const Title = () => {
  const navigate = useNavigate();
  return (
    <VStack>
      <Center h="520">
        <Heading fontSize={128} color="white">
          Diffusion Forest
        </Heading>
      </Center>
      <Center>
        <Button
          onClick={() => navigate("/StartCountdown")}
          w="full"
          h="full"
          color="white"
          variant="outline"
          fontSize={64}
          size="lg"
        >
          Start
        </Button>
      </Center>
    </VStack>
  );
};

export default Title;
