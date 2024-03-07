import { Col, Container, Row } from "react-bootstrap"
import OrderSummary from "./OrderSummary"
import CartProductCard from "./CartProductCard"

function CartPage() {
  return (
    <>
        <Container fluid>
            <Row className=" pb-5 d-block d-md-flex ">

            <Col className=" col-md-8 col-12  mb-4 ">
                <Row className="align-items-end border-bottom pb-3">
                    <Col>
                        <div className=" fw-bold fs-4 ">Shopping Cart</div>
                    </Col>
                    <Col>
                        <div className=" small fw-bold text-end "><i className="bi bi-heart"></i> Go to Wishlist</div>
                    </Col>
                </Row>

                <Row>
                    <CartProductCard/>
                </Row>
            
            </Col>


            <Col className=" col-md-4 col-12">
                <OrderSummary/>
            </Col>

            </Row>
        </Container> 
    </>
  )
}

export default CartPage
