import { useNavigate } from "react-router-dom";
import {
  ChakraProvider,
  theme,
  Center,
  VStack,
  Heading,
} from "@chakra-ui/react";

const ImageDisplay = () => {
  const navigate = useNavigate();

  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <Center h="520">
          <Heading fontSize={128}>Image Display</Heading>
        </Center>
      </VStack>
    </ChakraProvider>
  );
};

export default ImageDisplay;
