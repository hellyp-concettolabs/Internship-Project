import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderSection from "./Components/Navbar/HeaderSection"
import Footer from "./Components/FooterSection/Footer"
import HomeBody from "./Components/Body/HomeBody"
import ProductListPage from "./Components/ProductSection/ProductListPage";
import Dealsoftheday from "./Components/Body/DealsOfTheDay/Dealsoftheday";
import SingleProduct from "./Components/ProductSection/SingleProduct";
import CartPage from "./Components/CartSection/CartPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderSection/>
        <Routes>
          <Route index path="/" element={<HomeBody/>}/>
          <Route path="productlist" element={<ProductListPage/>}/>
          <Route path="dealsoftheday" element={<Dealsoftheday/>}/>
          <Route path="singleproduct" element={<SingleProduct/>}/>
          <Route path="cart" element={<CartPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
