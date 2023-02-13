import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav"
import SingleProduct from "./components/SingleProduct";


function Home() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Sidebar />
      <MobileNav />
      <SingleProduct/>
      
    </div>
  );
}

export default Home;
