import { Route, Routes } from "react-router-dom";
import { About } from "./About";
import { Home } from "./Home";

export const Page = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
};
