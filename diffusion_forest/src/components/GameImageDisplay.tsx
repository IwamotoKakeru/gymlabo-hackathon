import axios from "axios";
import { forest } from "./sampleImage";
import { ChakraProvider, theme, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const imageURL: string = "http://localhost:8000/api/";

axios.defaults.baseURL = "http://localhost:8000/api/";
// axios.defaults.headers.get["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";

const GameImageDisplay = () => {
  const [base64Image, setBase64Image] = useState("");
  useEffect(() => {
    axios
      .get(imageURL, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }) //URL
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        //失敗した時の処理
        console.log("Error");
        console.log(typeof error);
      });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Image src={forest} alt={"not found"} />
    </ChakraProvider>
  );
};

export default GameImageDisplay;
