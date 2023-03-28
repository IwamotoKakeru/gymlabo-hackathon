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

interface GameProps{
  setBestSimState: any,
  setBestAnsState: any,
}

const GameInput: React.FC<GameProps> = props => {
  const [inputText, setInputText] = useState("");
  const [submitText, setSubmitText] = useState("");

  const [similarity, setSimilarity] = useState(-1.0);

  const [bestText, setBestText] = useState("");
  const [bestSim, setBestSim] = useState(-1.0);
  
  const {promptText,setPromptText} = useContext(PromptTextContext);

  useEffect(()=>{
    props.setBestSimState(bestSim);
    props.setBestAnsState(bestText);
  },[props])

  const getSimilarityURL = (text1: string, text2: string) => {
    // eslint-disable-next-line no-useless-concat
    return "/text-similarity?text1=" + text1 + "&" + "text2=" + text2;
  };

  const handleSubmit = () => {
    setSubmitText(inputText);
    const sim = inputText.length;
    setSimilarity(sim);
    if(sim > bestSim){
      setBestText(inputText);
      setBestSim(sim);
    }
    /*
    axios
      .get(getSimilarityURL(promptText,inputText), {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        console.log(res.data.value);
        setSimilarity(res.data.value);
        if (res.data.value > bestSim) {
          setBestSim(res.data.value);
          setBestText(inputText);
        }
      })
      .catch((error) => {
        console.log("Error");
      });
      */
    setInputText("");
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
