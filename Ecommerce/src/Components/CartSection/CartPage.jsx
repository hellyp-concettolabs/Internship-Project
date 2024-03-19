import { Col, Container, Row } from "react-bootstrap"
import OrderSummary from "./OrderSummary"
import CartProductCard from "./CartProductCard"
import "./cartpage.scss"
function CartPage() {
  return (
    <>
        <Container fluid>
            <Row className="cartcontainer">

                <Col className="cc1 mb-4 p-0 ">
                    <Row className="align-items-sm-end align-items-center border-bottom pb-3">
                        <Col className="cartheading col-sm-8 col-6">
                            <div className="shoppingcartheading">Shopping Cart</div>
                            <div className="cartnoitems">(3 items)</div>
                        </Col>
                        <Col className="carttowish col-sm-4 col-6">
                            <div className=" text-end "><i className="bi bi-heart"></i> Go to Wishlist</div>
                        </Col>
                    </Row>
                    <Row>
                        <CartProductCard/>
                    </Row>
                
                </Col>


                <Col className="cc2 p-0 ">
                    <OrderSummary/>
                </Col>

            </Row>
        </Container> 
    </>
  )
}

export default CartPage
