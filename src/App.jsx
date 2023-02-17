import "./App.css";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Product from "./screens/Product";
import Category from "./screens/Category";
import Checkout from "./screens/Checkout";
import Cart from "./screens/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Header />
      <Sidebar />
      <MobileNav />
      <Routes>
      <Route path="/" element={<HomeScreen />}/>
          <Route path="/product" element={<Product />} />
          <Route path="/category" element={<Category />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
