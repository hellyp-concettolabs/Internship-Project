import { Button, Col, Container, Form, Image, Row } from "react-bootstrap"
import subscribearrow from "../../../assets/subscribearrow.png"
import "./subscribe.scss"

function Subscribe() {
  return (
    <>
        <Container fluid className=" my-5">
            <Container className=" bg-primary rounded-4 ">
                <Row className=" subscontainer">
                    <Col className="col-6 subscon1">
                        <Row>
                            <Col className="subscribeheading">Subscribe to Our Newsletters</Col>
                        </Row>
                         <Row>
                         <div className="subdesp p-0">Receive exclusive offers, unique gift ideas, and personalised tips for shopping and selling on BargainFox.</div>
                        </Row>              
                    </Col>
                    <Col className="subarrow">
                        <Image src={subscribearrow} className=" img-fluid"/>
                    </Col>
                    <Col className=" col-5 subscon2">
                        <Form className='d-flex w-100 '>
                            <Form.Control id="sub_email" type="text" placeholder="Enter your email" className='subsearch rounded-start-5 rounded-end-0' />
                            <Button  className='subnow rounded-end-5 rounded-start-0 col-sm-4 col-6 '>
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
