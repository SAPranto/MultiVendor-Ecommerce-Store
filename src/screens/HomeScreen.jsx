import "../App.css";
import Banner from "../components/Banner";
import ManBanner from "../components/ManBanner";
import Divider from "../components/Divider";
import LogoSlider from "../components/LogoSlider";
import ImageSlider from "../components/ImageSlider";
import SellRow from "../components/SellRow";
import DividerCategory from "../components/short/DividerCategory";



function HomeScreen() {
  return (
    <div className="pb-2 bg-gray-200">
      <Banner />
      <Divider title="Find Your Best Category" seeAllText="See all" />
      <LogoSlider />
      <div className="">
        <Divider title="Best Selling Products" seeAllText="See all" />
        <SellRow />
        <Divider title="Search By Brands" seeAllText="See all" />
        <ImageSlider />
        <DividerCategory title="Mans Fashion"/>
        <ManBanner/>
        <DividerCategory title="Womans Fashion"/>
        <ManBanner />
        <Divider title="Trending Watch" seeAllText="See all" />
      </div>
    </div>
  );
}

export default HomeScreen;
