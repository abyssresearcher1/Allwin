import { Route, Routes } from "react-router";
import "./App.css";
import About from "./pages/About/About";
import Delivery from "./pages/Delivery/Delivery";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/About" element={<About />} />
      <Route path="/Delivery" element={<Delivery />} />
    </Routes>
  );
}

export default App;
