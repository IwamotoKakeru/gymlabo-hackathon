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
import Routers from "./Routers";


function App() {
  return (
    <div>
      <Routers />
    </div>
  );
}

export default App;
