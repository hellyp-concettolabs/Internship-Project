import { Button, Col, Container, Form, Image, Row } from "react-bootstrap"
import subscribearrow from "../../../assets/subscribearrow.png"


function Subscribe() {
  return (
    <>
        <Container fluid className=" my-5">
            <Container className=" bg-primary rounded-4 ">
                <Row className=" p-3 align-items-center d-lg-flex d-block gap-lg-0 g-3 ">
                    <Col className=" d-flex">
                        <Row>
                            <Col className=" col-lg-10 col-12 text-lg-start text-center  ">
                                <div className=" text-light fw-bold fs-4 py-2 ">Subscribe to Our Newsletters</div>
                                <div className=" text-light ">Receive exclusive offers, unique gift ideas, and personalised tips for shopping and selling on BargainFox.</div>
                            </Col>
                            <Col className=" d-none d-lg-flex p-0">
                                 <Image src={subscribearrow} className=" img-fluid "/>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Form className='search d-flex w-100 '>
                            <Form.Control type="text" placeholder="Enter your email" className='rounded-start-5 rounded-end-0' />
                            <Button variant="outline-success" className='subscribe rounded-end-5 rounded-start-0 bg-dark text-light'>
                                Subscibe Now
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Container> 
    </>
  )
}

export default Subscribe
