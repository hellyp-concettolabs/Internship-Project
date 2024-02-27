import "./App.css"
import HeaderSection from "./Components/Navbar/HeaderSection"
import Menu from "./Components/Body/MenuBar/Menu"
import Banner from "./Components/Body/BannerSection/Banner"
//import Trending from "./Components/Body/TrendingSection/Trending"
import Footer from "./Components/FooterSection/Footer"
import Blogs from "./Components/Body/BlogsSection/Blogs"
//import Deal from "./Components/Body/DealsOfTheDay/Deal"
import Subscribe from "./Components/Body/SubscribeSection/Subscribe"
import DealTendingSelection from "./Components/Body/Deal&TrendingSection/DealTendingSelection"

function App() {


  return (
    <>
      <HeaderSection/>
      <Menu/>
      <Banner/>
      {/* <Deal/>
      <Trending/> */}
      <DealTendingSelection/>
      <Subscribe/>
      <Blogs/>
      <Footer/>
    </>
  )
}

export default App
