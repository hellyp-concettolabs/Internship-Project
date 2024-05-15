import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { Provider } from "react-redux";
import store from "./app/store.js";
import HeaderSection from "./Components/Header/HeaderSection";
import HomeBody from "./Components/Home/HomeBody.jsx";
import Footer from "./Components/Footer/Footer.jsx"
import ProductListPage from "./Components/ProductListPage/ProductListPage.jsx";
// import Dealsoftheday from "./Components/Body/DealsOfTheDay/Dealsoftheday";
import CartPage from "./Components/Cart/CartPage";
import Profile from "./Components/UserProfile/Profile.jsx";
import SingleProductDetail from "./Components/ProductDetailPage/SingleProductDetail";
import Address from "./Components/Checkout/Address.jsx";
import { UserProvider } from "./Components/UserData/StoreUserContext.jsx";
import Payment from "./Components/Checkout/Payment.jsx";
import ManageAddress from "./Components/Checkout/ManageAddress.jsx";
import YourOrders from "./Components/YourOrders/YourOrders.jsx";
import WishList from "./Components/WishList/WishList.jsx";
import OrderDetailPage from "./Components/YourOrders/OrderDetailPage.jsx";
import 'react-toastify/dist/ReactToastify.css';


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
            {/* <Route path="/dealsoftheday" element={<Dealsoftheday/>}/> */}
            <Route path="/singleproduct/:slug/:unique_id?/:sku" element={<SingleProductDetail/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/checkout/address" element={<Address/>}/>
            <Route path="/checkout/payment" element={<Payment/>}/>
            <Route path="/address" element={<ManageAddress/>}/>
            <Route path="/orders" element={<YourOrders/>}/>
            <Route path="/wishlist" element={<WishList/>}/>
            <Route path="/orders/:order_number/:order_id" element={<OrderDetailPage/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
        <ToastContainer position="top-right" autoClose={800}/>
    </UserProvider>
    </Provider>
    </>
  )
}

export default App
