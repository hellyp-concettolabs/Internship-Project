import Menu from "./MenuBar/Menu"
import Banner from "./BannerSection/Banner"
import Deal from "./DealsOfTheDay/Deal"
import Trending from "./TrendingSection/Trending"
import DealTendingSelection from "./Deal&TrendingSection/DealTendingSelection"
import Garden from "./GardenSection/Garden"
import Subscribe from "./SubscribeSection/Subscribe"
import Electronics from "./ElectronicsSection/Electronics"
import Blogs from "./BlogsSection/Blogs"

function MainBody() {
  return (
    <>
        <Menu/>
        <Banner/>
        <Deal/>
        <Trending/>
        <DealTendingSelection/>
        <Garden/>
        <Subscribe/>
        <Electronics/>
        <Blogs/>
    </>
  )
}

export default MainBody
