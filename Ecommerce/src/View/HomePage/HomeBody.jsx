import CategoryMenu from "../CategoryMenu/Menu";
import Banner from "../Banner/Banner";
import Deal from "../DealsOfTheWeek/Deal";
import Trending from "../Trending/Trending"
import DealTrendingSection from "../Deal&TrendingSection/DealTrendingSection"
import Garden from "../GardenSection/Garden"
import Subscribe from "../SubscribeSection/Subscribe"
import Electronics from "../ElectronicsSection/Electronics"
//import Blogs from "./BlogsSection/Blogs"

function MainBody() {
  return (
    <>
        <CategoryMenu/>
        <Banner/>
        <Deal/>
        <Trending/>
        <DealTrendingSection/>
        <Garden/>
        <Subscribe/>
        <Electronics/>
        {/* <Blogs/> */}
    </>
  )
}

export default MainBody
