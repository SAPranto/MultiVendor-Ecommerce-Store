import "../App.css";
import Banner from "../components/Banner";
import ManBanner from "../components/ManBanner";
import Divider from "../components/Divider";
import LogoSlider from "../components/LogoSlider";
import ImageSlider from "../components/ImageSlider";
import DividerCategory from "../components/short/DividerCategory";
import ProductCard from '../components/short/ProductCard'
import Category from '../components/short/Category'



function HomeScreen() {
  return (
    <div className="pb bg-gray-200">
      <Banner />
      <Divider title="Find Your Best Category" seeAllText="See all" />
      <LogoSlider />
        <Divider title="Search By Brands" seeAllText="See all" />
        <DividerCategory title="Highest Selling Products"/>
        <ManBanner/>
        <ImageSlider />
        <DividerCategory title="New Arrivals"/>
        <div className='container mx-auto flex my-2'>
        <Category />
        <div className='sm:flex grid grid-cols-2 gap-2 w-full justify-between'>
      <ProductCard src="/headphone.webp" title="Blue t-shirt" discountPrice="520" price="450"/>
      <ProductCard src="/mouse3.webp" title="Blue t-shirt" discountPrice="520" price="450"/>
      <ProductCard src="/camera.webp" title="Blue t-shirt" discountPrice="520" price="450"/>
      <ProductCard src="/mouse.webp" title="Blue t-shirt" discountPrice="520" price="450"/>
        </div>
      </div> 
    </div>
  );
}

export default HomeScreen;
