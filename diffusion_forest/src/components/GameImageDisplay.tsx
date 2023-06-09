import axios from "axios";
import { forest } from "./sampleImage";
import { ChakraProvider, theme, Image } from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react";
import { PromptTextContext } from "../App";

const imageURL: string = "http://localhost:8000/api/";

axios.defaults.baseURL = "http://localhost:8000/api/";
// axios.defaults.headers.get["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";

const imageExtension = "data:image/png;base64,"

const GameImageDisplay = () => {
  const [base64Image, setBase64Image] = useState("");
  const {promptText,setPromptText} = useContext(PromptTextContext)

  useEffect(() => {
    axios
      .get(imageURL, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        console.log(res.data);
        setBase64Image(imageExtension+res.data.image);
        setPromptText(res.data.prompt)
      })
      .catch((error) => {
        console.log("Error");
      });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Image src={base64Image} alt={"not found"} justifyContent={'center'}/>
    </ChakraProvider>
  );
};

export default GameImageDisplay;
