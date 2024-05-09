import { Col, Container, Row, Spinner } from "react-bootstrap"
import OrderSummary from "./OrderSummary"
import CartProductCard from "./CartProductCard"
import "./cartpage.scss"
import axios from "axios"
import {useEffect, useState } from "react"
import NoProduct from "../ProductNotFoundPage/NoProduct"
import { useDispatch } from "react-redux";
import { cartProductCount } from "../CartProductCount/CartProductCount.jsx"


function CartPage() {

    const dispatch = useDispatch();
    const [loading,setLoading] = useState(false);
    const[cartProductData,setCartProductData] = useState({});
    const[deleteItem,setDeleteItem] = useState(false);
    const[quantityChange,isQuantityChange] = useState(false);


    const fetchData = async() =>{
        if(localStorage.getItem("token") !== null){
        setLoading(true);
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
        await axios.post(' https://bargainfox-dev.concettoprojects.com/api/my-cart')
        .then((response) =>{
            // console.log(response.data.result);
            setCartProductData(response.data.result);
            setLoading(false);
            dispatch(cartProductCount(response.data.result.user_cart.length));
        })
        .catch(error =>{
            console.error('Error making Post request:', error);
            setLoading(false);
          })
        }
    }

    useEffect(() => {
        fetchData();
        setDeleteItem(false);
        isQuantityChange(false);
    }, [deleteItem,quantityChange])

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
