import "./App.css";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Product from "./screens/Product";
import Category from "./screens/Category";

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
      </Routes>
    </div>
  );
}

export default App;
