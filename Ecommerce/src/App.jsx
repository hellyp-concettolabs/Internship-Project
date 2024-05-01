import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderSection from "./Components/Navbar/HeaderSection"
import Footer from "./Components/FooterSection/Footer"
import HomeBody from "./Components/Body/HomeBody"
import ProductListPage from "./Components/ProductSection/ProductListPage";
import Dealsoftheday from "./Components/Body/DealsOfTheDay/Dealsoftheday";
import CartPage from "./Components/CartSection/CartPage";
import Profile from "./Components/Navbar/Profile";
import SingleProductDetail from "./Components/ProductSection/SingleProductDetail";
import Address from "./Components/Checkout/Address.jsx";
import { UserProvider } from "./Components/UserData/StoreUserContext.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import Payment from "./Components/Checkout/Payment.jsx";
import ManageAddress from "./Components/Navbar/ManageAddress.jsx";
import YourOrders from "./Components/Navbar/YourOrders.jsx";
import WishList from "./Components/WishListSection/WishList.jsx";


function App() {

  return (
    <>
    <Provider store={store}>
    <UserProvider>
        <BrowserRouter>
          <HeaderSection/>
          <Routes>
            <Route index path="/" element={<HomeBody/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/productlist" element={<ProductListPage/>}/>
            <Route path="/:category_id?/:sub_category_id?/:collection_id?" element={<ProductListPage/>}/>
            <Route path="/dealsoftheday" element={<Dealsoftheday/>}/>
            <Route path="/singleproduct/:slug/:unique_id?/:sku" element={<SingleProductDetail/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/checkout/address" element={<Address/>}/>
            <Route path="/checkout/payment" element={<Payment/>}/>
            <Route path="/address" element={<ManageAddress/>}/>
            <Route path="/orders" element={<YourOrders/>}/>
            <Route path="/wishlist" element={<WishList/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </UserProvider>
    </Provider>
    </>
  )
}

export default App
