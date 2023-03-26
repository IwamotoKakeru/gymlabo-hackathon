import React from "react";
import {
  ChakraProvider,
  theme,
  Flex,
  Tooltip,
  Button,
  useToast,
} from "@chakra-ui/react";

function App() {
  const toast = useToast();

  return (
    <ChakraProvider theme={theme}>
      <Flex justifyContent="center" alignItems="center" minH="100vh">
        <Tooltip placement="top" label="ボタンを押すとToastを表示します">
          <Button
            colorScheme="green"
            onClick={() => {
              toast({
                title: "Toastです",
                description: "3秒間表示されます",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
            }}
          >
            hover
          </Button>
        </Tooltip>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
