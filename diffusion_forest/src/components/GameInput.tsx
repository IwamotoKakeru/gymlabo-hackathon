import React, { useState } from "react";

import {
  ChakraProvider,
  theme,
  Input,
  Center,
  VStack,
  Button,
  HStack,
} from "@chakra-ui/react";

const GameInput = () => {
  const [inputText, setInputText] = useState("");
  const [submitText, setSubmitText] = useState("");

  const handleSubmit = () => {
    setSubmitText(inputText);
    setInputText("");
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <Center>{submitText}</Center>
        <HStack>
          <Input
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
            onKeyPress={handleKeyPress}
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </HStack>
      </VStack>
    </ChakraProvider>
  );
};

export default GameInput;
