import { Col, Container, Row } from "react-bootstrap"

function Footer() {
  return (
    <>
        <footer className=" bg-dark text-light pb-4 pt-5">
            <Container className="  ">
                <Row className=" d-flex justify-content-between mb-2">
                    <Col>
                        <Row className=" d-flex flex-column">
                            <Col className=" fw-bold mb-2 w-50 ">
                                Help
                            </Col>
                            <Col className="mb-2">
                                Delivery
                            </Col>
                            <Col className="mb-2">
                                Returns
                            </Col>
                            <Col className="mb-2">
                                Help Centre
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row className=" d-flex flex-column">
                            <Col className=" fw-bold mb-2 ">
                                About Us
                            </Col>
                            <Col className="mb-2">
                                About Us
                            </Col>
                            <Col className="mb-2">
                                Our Blogs
                            </Col>
                            <Col className="mb-2">
                                Contact Us
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row className=" d-flex flex-column">
                            <Col className=" fw-bold mb-2 ">
                                Your Account
                            </Col>
                            <Col className="mb-2">
                                Your Orders
                            </Col>
                            <Col className="mb-2">
                                Checkout
                            </Col>
                            <Col className="mb-2">
                                Download the App
                            </Col>
                            <Col className="mb-2">
                                FastFox Subscription
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr></hr>
                <div className="bottom-footer text-center pt-3 ">
                    <Row className="align-items-center g-3 gap-lg-0 ">
                        <Col className=" d-flex gap-4 col-12 col-lg-4 justify-content-center justify-content-lg-start ">
                            <div className="rounded-circle bg-primary px-3 py-3 ">
                                <i className="bi bi-facebook "></i>
                            </div>
                            <div className=" rounded-circle bg-primary p-3 ">
                                <i className="bi bi-twitter"></i>
                            </div>
                            <div className=" rounded-circle bg-primary p-3  ">
                                <i className="bi bi-instagram"></i>
                            </div>
                            <div className=" rounded-circle bg-primary p-3">
                                <i className="bi bi-pinterest"></i>
                            </div>
                        </Col>
                        <Col className=" col-12 col-lg-4">
                            <p className=" text-light ">All rights reserved © 2023 BargainFox.com</p>
                        </Col>
                        <Col className=" text-center text-xl-end col-12 col-lg-4">
                            <p  className=" text-light ">Terms of Service| Privacy Policy</p>
                        </Col>
                    </Row>
                </div>
            </Container> 
        </footer>
    </>
  )
}

export default Footer
