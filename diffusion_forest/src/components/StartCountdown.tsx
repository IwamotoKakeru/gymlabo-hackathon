import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import useCountdown from "@bradgarropy/use-countdown";
import {
  ChakraProvider,
  theme,
  Center,
  VStack,
  Heading,
} from "@chakra-ui/react";

const StartCountdown = () => {
  const navigate = useNavigate();
  const countdown = useCountdown({
    seconds: 3,
    onCompleted: () => navigate("/GameScene"),
  });
  return (
    <VStack>
      <Center h="520">
        <motion.h1
          animate={{
            scale: [100, 0, 0, 100, 0, 0, 100, 0, 0],
            opacity: [1, 1, 0, 1, 1, 0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            times: [0, 0.3, 0.36, 0.36, 0.63, 0.69, 0.69, 0.97, 1],
          }}
        >
          <Heading fontSize={256} color="white">
            {countdown.seconds}
          </Heading>
        </motion.h1>
      </Center>
    </VStack>
  );
};

export default StartCountdown;
