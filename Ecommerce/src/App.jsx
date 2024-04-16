import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderSection from "./Components/Navbar/HeaderSection"
import Footer from "./Components/FooterSection/Footer"
import HomeBody from "./Components/Body/HomeBody"
import ProductListPage from "./Components/ProductSection/ProductListPage";
import Dealsoftheday from "./Components/Body/DealsOfTheDay/Dealsoftheday";
import CartPage from "./Components/CartSection/CartPage";
import Profile from "./Components/Navbar/Profile";
import SingleProductDetail from "./Components/ProductSection/SingleProductDetail";
import { UserProvider } from "./Components/UserData/StoreUserContext.jsx"
function App() {

  return (
    <>
    <UserProvider>
        <BrowserRouter>
          <HeaderSection/>
          <Routes>
            <Route index path="/" element={<HomeBody/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/productlist" element={<ProductListPage/>}/>
            <Route path="/:category_id?/:sub_category_id?/:collection_id?" element={<ProductListPage/>}/>
            <Route path="/dealsoftheday" element={<Dealsoftheday/>}/>
            <Route path="/singleproduct/:sku/:unique_id" element={<SingleProductDetail/>}/>
            <Route path="/cart" element={<CartPage/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </UserProvider>
    </>
  )
}

export default App
