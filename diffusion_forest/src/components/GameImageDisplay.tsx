import axios from "axios";
import { forest } from "./sampleImage";
import { ChakraProvider, theme, Image } from "@chakra-ui/react";

const imageURL: string = "localhost:8000/api/";

// const option: any = { responseType: "blob" };
// axios
//   .get(imageURL, option)
//   .then((res: any) => {
//     // 通信が成功した場合
//   })
//   .catch((err: any) => {
//     // 通信が失敗した場合
//   });

const GameImageDisplay = () => {
  return (
    <ChakraProvider theme={theme}>
      <Image src={forest} alt={"not found"}/>
    </ChakraProvider>
  );
};

export default GameImageDisplay;
