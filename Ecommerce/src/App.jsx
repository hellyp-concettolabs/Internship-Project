import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderSection from "./Components/Navbar/HeaderSection"
import Footer from "./Components/FooterSection/Footer"
import MainBody from "./Components/Body/MainBody"
import ProductListPage from "./Components/ProductSection/ProductListPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderSection/>
        <Routes>
          <Route index path="/" element={<MainBody/>}/>
          <Route path="productlist" element={<ProductListPage/>}/>
            {/* <Route index element={}/>
            <Route path="blogs" element={<Blogs/>}/>
            <Route path="contact" element={<Contact/>}/> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
