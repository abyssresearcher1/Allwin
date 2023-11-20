import { Route, Routes } from "react-router";
import "./App.css";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Delivery from "./pages/Delivery/Delivery";
import Favourites from "./pages/Favourites/Favourites";
import MainPage from "./pages/MainPage/MainPage";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Products from "./pages/Products/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/About" element={<About />} />
      <Route path="/Delivery" element={<Delivery />} />
      <Route path="/fullfilment" element={<MainPage />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Favourites" element={<Favourites />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/Products/:id" element={<ProductDetails />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
