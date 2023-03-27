import { BrowserRouter, Routes, Route } from "react-router-dom";
import Result from "./components/Result"
import GameScene from "./components/GameScene";
import StartCountdown from "./components/StartCountdown";
import Title from "./components/Title";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/GameScene" element={<GameScene />} />
        <Route path="/StartCountdown" element={<StartCountdown />} />
        <Route path="/Result" element={<Result /> }/>
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
