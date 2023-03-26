import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameScene from "./components/GameScene";
import Title from "./components/Title";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/GameScene" element={<GameScene />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
