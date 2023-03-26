import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
