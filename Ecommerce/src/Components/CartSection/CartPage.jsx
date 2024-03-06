import { Col, Container, Row } from "react-bootstrap"
import OrderSummary from "./OrderSummary"

function CartPage() {
  return (
    <>
        <Container fluid>
            <Row className=" pb-5 ">

            <Col className=" col-8">
                <Row className="align-items-end">
                    <Col>
                        <div className=" fw-bold fs-4 ">Shopping Cart</div>
                    </Col>
                    <Col>
                        <div className=" small fw-bold text-end "><i className="bi bi-heart"></i> Go to Wishlist</div>
                    </Col>
                </Row>
            
            </Col>


            <Col className=" col-4">
                <OrderSummary/>
            </Col>

            </Row>
        </Container> 
    </>
  )
}

export default CartPage
