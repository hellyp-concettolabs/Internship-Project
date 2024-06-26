import { Col, Container, Row, Spinner } from "react-bootstrap";
import axios from "axios";
import {useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import OrderSummary from "../../Components/Cart/OrderSummary.jsx";
import CartProductCard from "../../Components/Cart/CartProductCard.jsx";
import NoProduct from "../../Components/ProductNotFoundPage/NoProduct.jsx";
import { cartProductCount } from "../../Components/CartProductCount/CartProductCount.jsx";
import "./cartpage.scss";
import { Domain_Base_Url } from "../../app/DomainBaseUrl/BaseUrl.js";


function CartPage() {

    const dispatch = useDispatch();
    const [loading,setLoading] = useState(false);
    const[cartProductData,setCartProductData] = useState({});
    const[deleteItem,setDeleteItem] = useState(false);
    const[quantityChange,isQuantityChange] = useState(false);

    useEffect(() => {
        fetchData();
        setDeleteItem(false);
        isQuantityChange(false);
    }, [deleteItem,quantityChange]);

    const fetchData = async() =>{
        try{
            if(localStorage.getItem("token") !== null){
            setLoading(true);
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
            const response = await axios.post(`${Domain_Base_Url}/my-cart`)
            // console.log(response.data.result);
            setCartProductData(response.data.result);
            setLoading(false);
            dispatch(cartProductCount(response.data.result.user_cart.length));
        }}
        catch(error){
            console.error('Error making Post request for CartPage:', error);
            setLoading(false);
        }
    }

    // console.log(cartProductData)

  return (
    <>
        {loading ? 
            <div className=" d-flex justify-content-center align-items-center ">
                <Spinner animation="border" variant="primary" />
            </div>:
        (!loading && cartProductData && cartProductData.user_cart && cartProductData.user_cart.length > 0 &&
            <Container fluid>
                {/* BreadCrumb */}
                <Row>
                    <nav style={{'--bs-breadcrumb-divider': '>'}} aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/" className=" text-decoration-none text-secondary">Home</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page"> &gt; &nbsp; Cart</li>
                      </ol>
                    </nav>
                </Row>

                <Row className="cartcontainer">

                    <Col className="cc1 mb-4 p-0 ">
                        <Row className="align-items-sm-end align-items-center border-bottom pb-3">
                            <Col className="cartheading col-sm-8 col-6">
                                <div className="shoppingcartheading">Shopping Cart</div>
                                <div className="cartnoitems">({cartProductData.user_cart && cartProductData.user_cart.length} items)</div>
                            </Col>
                            <Col className="carttowish col-sm-4 col-6">
                                {/* <div className=" text-end "><i className="bi bi-heart"></i> Go to Wishlist</div> */}
                            </Col>
                        </Row>
                        <Row>
                            <CartProductCard cartData={cartProductData.user_cart} setDeleteItem={setDeleteItem} isQuantityChange={isQuantityChange}/>
                        </Row>

                    </Col>


                    <Col className="cc2 p-0 mb-4 ">
                        <OrderSummary cartDetail={cartProductData}/>
                    </Col>

                </Row>
            </Container> 
        )}
        {!loading && cartProductData && cartProductData.user_cart && cartProductData.user_cart.length <= 0 &&
            <Container fluid style={{padding:"80px 50px 60px"}}>
                <Col className=" d-flex justify-content-center productlistsec">
                    <NoProduct heading={'Your cart is empty'} 
                      desc={`Looks like you have not added something to you cart.
                      Go ahead & explore top categories.`}/>
                </Col>
            </Container>
        }
    </>
  )
}

export default CartPage
