import { Route, Routes } from "react-router";
import "./App.css";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import Delivery from "./pages/Delivery/Delivery";
import Favourites from "./pages/Favourites/Favourites";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/About" element={<About />} />
      <Route path="/Delivery" element={<Delivery />} />
      <Route path="/fullfilment" element={<MainPage />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Favourites" element={<Favourites />} />
    </Routes>
  );
}

export default App;
