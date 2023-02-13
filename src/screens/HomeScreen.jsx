import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import ManBanner from "./components/ManBanner";
import Divider from "./components/Divider";
import LogoSlider from "./components/LogoSlider";
import ImageSlider from "./components/ImageSlider";
import SellRow from "./components/SellRow";
import BabyRow from "./components/BabyRow";
import ZoomImg from "./components/short/ZoomImg";
import DividerCategory from "./components/short/DividerCategory";
import ProductBanner from "./components/ProductBanner"
import MobileNav from "./components/MobileNav"
import Card from "./components/Card"
import TradeService from "./components/TradeService";
import Flag from "./components/Flag";


function HomeScreen() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Sidebar />
      <MobileNav/>
      <Banner />
      <Divider title="Find Your Best Category" seeAllText="See all" />
      <LogoSlider />
      <div className="pb-2 bg-gray-200">
        <Divider title="Vendor Brands" seeAllText="See all" />
        <ImageSlider />
      </div>
      <div className="pb-2 bg-gray-200">
        <Divider title="Brands For You" seeAllText="See all" />
        <ImageSlider />
        <Divider title="Best Selling Products" seeAllText="See all" />
        <SellRow />
        <Divider title="Best Baby Products" seeAllText="See all" />
        <BabyRow />
        <ZoomImg />
        <DividerCategory title="Mans Fashion"/>
        <ManBanner/>
        <DividerCategory title="Womans Fashion"/>
        <ManBanner />
        <ZoomImg />
        <Divider title="Trending Watch" seeAllText="See all" />
        <ProductBanner />
        <Divider title="Best Selling Mobile Phones" seeAllText="See all" />
        <Card />
        <DividerCategory title="OUR TRADE SERVICES"/>
        <TradeService />
        <DividerCategory title="CHOOSE YOUR SUPPLIERS BY REGIONS" />
        <Flag/>
      </div>
    </div>
  );
}

export default HomeScreen;
