import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImageDisplay from "./components/ImageDisplay";
import Title from "./components/Title";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/imagedisplay" element={<ImageDisplay />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
