import CategoryMenu from "../../Components/Home/CategoryMenu/Menu";
import Banner from "../../Components/Home/Banner/Banner";
import Deal from "../../Components/Home/DealsOfTheWeek/Deal";
import Trending from "../../Components/Home/Trending/Trending"
import DealTrendingSection from "../../Components/Home/Deal&TrendingSection/DealTrendingSection"
import Garden from "../../Components/Home/GardenSection/Garden"
import Subscribe from "../../Components/Home/SubscribeSection/Subscribe"
import Electronics from "../../Components/Home/ElectronicsSection/Electronics"
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
