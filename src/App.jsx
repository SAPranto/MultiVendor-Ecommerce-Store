import './App.css'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar'
import Banner from './components/Banner'
import ManBanner from './components/ManBanner'
import Divider from './components/Divider'
import LogoSlider from './components/LogoSlider'
import ImageSlider from './components/ImageSlider'
import Apparel from './components/Apparel'

function App() {

  return (
    <div className=''>

      <Navbar/>
      <Header />
      <Sidebar />
      <Banner />
      <Divider title="Find Your Best Category" seeAllText="See all" />
      <LogoSlider/>
      <div className='pb-2 bg-gray-200'>
      <Divider title="Vendor Brands" seeAllText="See all" />
      <ImageSlider/>
      </div>
      <div className='pb-2 bg-gray-200'>
      <Divider title="Brands For You" seeAllText="See all" />
      <ImageSlider/>
      </div>
      <Apparel/>
      <ManBanner/>

    </div>
  )
}

export default App
