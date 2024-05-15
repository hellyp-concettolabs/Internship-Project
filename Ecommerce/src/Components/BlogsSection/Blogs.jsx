import { Button, Card, Col, Container, Row } from "react-bootstrap"
import blog1 from "../../../assets/blog1.png"
import blog2 from "../../../assets/blog2.png"
import blog3 from "../../../assets/blog3.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./blogs.scss"

function Blogs() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 599,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
        ]
      };

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


                <div className=" pb-5 p-3">
                    <Slider {...settings}>
                    <div>
                        <Card className=" rounded-4 m-2 ">
                            <Card.Img variant="top" src={blog1} className=" img-fluid p-2 "/>
                            <Card.Body className=" p-0 ">
                            <Card.Title>7 Reasons Why Spring is The Best Season</Card.Title>
                            <Card.Text className=" p-3">
                                <div className=" d-flex justify-content-evenly justify-content-md-between  align-items-center">
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
                    </div>
                    <div className="">
                        <Card className=" rounded-4 m-2 ">
                            <Card.Img variant="top" src={blog2} className=" img-fluid p-2 "/>
                            <Card.Body className=" p-0 ">
                            <Card.Title>New year, same you? Here&#39;s how to stick with your New Year&#39;s Resolution!</Card.Title>
                            <Card.Text className=" p-3">
                                <div className=" d-flex justify-content-evenly justify-content-md-between align-items-center">
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
                    </div>
                    <div className="">
                        <Card className=" rounded-4 m-2 ">
                            <Card.Img variant="top" src={blog3} className=" img-fluid p-2 "/>
                            <Card.Body className=" p-0 ">
                            <Card.Title>6 Great Reasons to Celebrate Christmas!</Card.Title>
                            <Card.Text className=" p-3">
                                <div className=" d-flex justify-content-evenly justify-content-md-between align-items-center">
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
                    </div>
                   </Slider> 
                </div>
                
            </Container>
        </Container> 
    </>
  )
}

export default Blogs
