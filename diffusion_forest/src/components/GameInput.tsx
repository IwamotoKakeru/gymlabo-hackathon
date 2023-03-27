import React, { useState, useEffect ,useContext} from "react";
import axios from "axios";
import {
  ChakraProvider,
  theme,
  Input,
  Center,
  VStack,
  Button,
  HStack,
} from "@chakra-ui/react";
import { PromptTextContext } from "../App";

const similaliryURL: string = "/text-similarity?text1=hoge&text2=fuga";

const GameInput = () => {
  const [inputText, setInputText] = useState("");
  const [submitText, setSubmitText] = useState("");

  const [similarity, setSimilarity] = useState("");
  
  const {promptText,setPromptText} = useContext(PromptTextContext);

  const getSimilarityURL = (text1: string, text2: string) => {
    // eslint-disable-next-line no-useless-concat
    return "/text-similarity?text1=" + text1 + "&" + "text2=" + text2;
  };

  const handleSubmit = () => {
    setSubmitText(inputText);
    setInputText("");
    setSimilarity("");
    axios
      .get(getSimilarityURL(promptText,submitText), {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        console.log(res.data.value);
        setSimilarity(res.data.value);
      })
      .catch((error) => {
        console.log("Error");
      });
  };

  const handleChange = (event: any) => {
    setInputText(event.target.value);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <Center fontSize={64}>{submitText+":"+similarity}</Center>
        <HStack>
          <Input
            type="text"
            value={inputText}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </HStack>
      </VStack>
    </ChakraProvider>
  );
};

export default GameInput;
