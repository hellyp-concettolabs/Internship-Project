import { Button, Card, Col, Container, Row } from "react-bootstrap"
import blog1 from "../../../assets/blog1.png"
import blog2 from "../../../assets/blog2.png"
import blog3 from "../../../assets/blog3.png"


function Blogs() {
  return (
    <>
        <Container fluid className=" bg-body-secondary ">
            <Container className=" text-center pt-5">
                <Row className=" p-3 ">
                    <Col>
                        <span className=" fs-4 fw-bold ">Blogs</span>
                    </Col>
                </Row>
                <Row className=" p-3 ">
                    <Col>
                        <span className=" fs-6">Feeling nosey? Check out what we&#39;ve been up to in the den.</span>
                    </Col>
                </Row>
                <Row className=" pb-5 p-3">
                    <Col>
                        <Card className=" rounded-4">
                            <Card.Img variant="top" src={blog1} className=" img-fluid p-2 "/>
                            <Card.Body className=" p-0 ">
                            <Card.Title>7 Reasons Why Spring is The Best Season</Card.Title>
                            <Card.Text className=" p-3">
                                <div className=" d-flex justify-content-between align-items-center">
                                    <div>
                                        <i className="bi bi-calendar3 m-1 "></i>
                                        <span className="">13 March 2023</span>
                                    </div>
                                    <div>
                                        <Button className=" p-2 bg-primary rounded-5 ">Read More</Button>
                                    </div>
                                </div>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className=" d-none d-md-flex">
                        <Card className=" rounded-4">
                            <Card.Img variant="top" src={blog2} className=" img-fluid p-2 "/>
                            <Card.Body className=" p-0 ">
                            <Card.Title>New year, same you? Here&#39;s how to stick with your New Year&#39;s Resolution!</Card.Title>
                            <Card.Text className=" p-3">
                                <div className=" d-flex justify-content-between align-items-center">
                                    <div>
                                        <i className="bi bi-calendar3 m-1 "></i>
                                        <span className="">13 March 2023</span>
                                    </div>
                                    <div>
                                        <Button className=" p-2 bg-primary rounded-5 ">Read More</Button>
                                    </div>
                                </div>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className=" d-none d-lg-flex">
                        <Card className=" rounded-4">
                            <Card.Img variant="top" src={blog3} className=" img-fluid p-2 "/>
                            <Card.Body className=" p-0 ">
                            <Card.Title>6 Great Reasons to Celebrate Christmas!</Card.Title>
                            <Card.Text className=" p-3">
                                <div className=" d-flex justify-content-between align-items-center">
                                    <div>
                                        <i className="bi bi-calendar3 m-1 "></i>
                                        <span className="">13 March 2023</span>
                                    </div>
                                    <div>
                                        <Button className=" p-2 bg-primary rounded-5 ">Read More</Button>
                                    </div>
                                </div>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
                
            </Container>
        </Container> 
    </>
  )
}

export default Blogs
