import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChakraProvider,
  theme,
  Button,
  Center,
  VStack,
  Heading,
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
    <div>
      <PromptTextContext.Provider value={{ promptText, setPromptText }}>
        <Routers />
      </PromptTextContext.Provider>
    </div>
  );
}

export default App;
