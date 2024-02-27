import { Container, Image,Row, Col, Card} from "react-bootstrap"
import rightarrow from "../../../assets/rightarrow.png"
import womenclothes from "../../../assets/womanclothes.png"
import manclothing from "../../../assets/manclothing.png"
import shoes from "../../../assets/shoes.png"
import sportsshoe from "../../../assets/sportsshoe.png"
import jewellery from "../../../assets/jewellery.png"
import sunglasses from "../../../assets/sunglasses.png"
import left from "../../../assets/left.png"
import right from "../../../assets/right.png"

function Deal() {
  return (
      <Container className=" mb-3 ">
        <Row className=" d-flex justify-content-between mb-5">
          <Col className=" d-flex justify-content-start align-items-end gap-3 ">
            <span className=" fw-bold fs-3 fs-md-5">Deals of the Day</span> 
            <p className="fs-5 m-0 d-none d-md-block " style={{color:"#A4A4B8"}}> Ends in</p>
            <Row className=" d-flex justify-content-between align-items-center gap-2 d-none d-md-flex">
              <Col className=" d-flex flex-column justify-content-center align-items-center rounded " style={{backgroundColor:"#2569F3", color:"white"}}>
                <div className=" fw-bold ">11</div>
                <div className=" fs-6 ">Hours</div>
              </Col>
              <Col className=" d-flex flex-column justify-content-center align-items-center rounded " style={{backgroundColor:"#2569F3", color:"white"}}>
                <div className=" fw-bold ">11</div>
                <div className=" fs-6 ">Mins</div>
              </Col>
              <Col className=" d-flex flex-column justify-content-center align-items-center rounded " style={{backgroundColor:"#2569F3", color:"white"}}>
                <div className=" fw-bold ">11</div>
                <div className=" fs-6 ">Secs</div>
              </Col>
            </Row>
          </Col>
          <Col className=" d-flex justify-content-end align-items-end gap-3">
            <span className=" fs-6 ">View All Deals</span> 
            <Image src={rightarrow} className=" img-fluid mb-1"/>
          </Col>
        </Row>
        <Row lg={6} className=" d-flex d-md-none ">
          <Col>
            <p className="fs-5 m-0 d-none d-md-block " style={{color:"#A4A4B8"}}> Ends in</p>
          </Col>
          <Col className=" d-flex flex-column justify-content-center align-items-center rounded " style={{backgroundColor:"#2569F3", color:"white"}}>
            <div className=" fw-bold ">11</div>
            <div className=" fs-6 ">Hours</div>
          </Col>
          <Col className=" d-flex flex-column justify-content-center align-items-center rounded " style={{backgroundColor:"#2569F3", color:"white"}}>
            <div className=" fw-bold ">11</div>
            <div className=" fs-6 ">Mins</div>
          </Col>
          <Col className=" d-flex flex-column justify-content-center align-items-center rounded " style={{backgroundColor:"#2569F3", color:"white"}}>
            <div className=" fw-bold ">11</div>
            <div className=" fs-6 ">Secs</div>
          </Col>
        </Row>
        <Row>
          <Col lg={1} className=" bg-body-secondary d-flex justify-content-center align-items-center rounded-circle container m-0 p-0 ">
            <div><Image src={left} className="img-fluid"/></div>
          </Col>
          <Col xs={12} md={6} lg={2}>
            <Card >
            <Card.Img variant="top" src={womenclothes} className=" img-fluid "/>
            <Card.Body>
              {/* <Card.Title></Card.Title> */}
              <Card.Text>
                <span>Upto 40% off</span>
                <p className=" fw-bold ">Women&#39;s Western Clothing</p>
              </Card.Text>
            </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={2}>
            <Card >
            <Card.Img variant="top" src={manclothing} className=" img-fluid "/>
            <Card.Body>
              {/* <Card.Title></Card.Title> */}
              <Card.Text>
                <span>Upto 40% off</span>
                <p className=" fw-bold ">Men&#39;s Western Clothing</p>
              </Card.Text>
            </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={2}>
            <Card >
            <Card.Img variant="top" src={shoes} className=" img-fluid "/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                <span>Upto 50% off</span>
                <p className=" fw-bold ">Casual Shoes</p>
              </Card.Text>
            </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={2}>
            <Card >
            <Card.Img variant="top" src={sportsshoe} className=" img-fluid "/>
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>
                <span>Upto 50% off</span>
                <p className=" fw-bold ">Men&#39;s Running shoes</p>
              </Card.Text>
            </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={2}>
            <Card >
            <Card.Img variant="top" src={jewellery} className=" img-fluid "/>
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>
                <span>Upto 20% off</span>
                <p className=" fw-bold ">Statement Fashion Jewellery</p>
              </Card.Text>
            </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={2}>
            <Card >
            <Card.Img variant="top" src={sunglasses} className=" img-fluid "/>
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>
                <span>Upto 10% off</span>
                <p className=" fw-bold ">Sunglasses</p>
              </Card.Text>
            </Card.Body>
            </Card>
          </Col>
          <Col lg={1} className=" bg-body-secondary d-flex justify-content-center align-items-center">
            <Image src={right} className=" img-fluid "/>
          </Col>
        </Row>
        
      </Container>
  )
}

export default Deal
