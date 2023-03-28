import React, { createContext, useState } from "react";
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
import Routers from "./Routers";

export const PromptTextContext = createContext(
  {} as {
    promptText: string;
    setPromptText: React.Dispatch<React.SetStateAction<string>>;
  }
);

function App() {
  const [promptText, setPromptText] = useState("");
  return (
    <ChakraProvider>
      <Box h="1080" backgroundColor="green.400">
        <PromptTextContext.Provider value={{ promptText, setPromptText }}>
          <Routers />
        </PromptTextContext.Provider>
      </Box>
    </ChakraProvider>
  );
}

export default App;
