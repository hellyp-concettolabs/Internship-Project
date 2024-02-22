import { Container, Image,Row, Col, Card} from "react-bootstrap"
import rightarrow from "../../../assets/rightarrow.png"
import womenclothes from "../../../assets/womanclothes.png"
import left from "../../../assets/left.png"

function Deal() {
  return (
      <Container>
        <Row className=" d-flex justify-content-between mb-5">
          <Col className=" d-flex justify-content-start align-items-end gap-4 ">
            <span className=" fw-bold fs-3 fs-md-5">Deals of the Day</span> 
            <span className="fs-5" style={{color:"#A4A4B8"}}> Ends in</span>
            <Row className=" d-flex justify-content-between align-items-center gap-2 ">
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
        <Row>
        <Col className=" bg-body-secondary">
            <div><Image src={left} className=" m-auto"/></div>
          </Col>
          <Col>
            <Card >
            <Card.Img variant="top" src={womenclothes} className=" img-fluid "/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                <span>Upto 40% off</span>
                <p>Women&#39;s Western Clothing</p>
              </Card.Text>
            </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card >
            <Card.Img variant="top" src={womenclothes} className=" img-fluid "/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
              
              </Card.Text>
            </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card >
            <Card.Img variant="top" src={womenclothes} className=" img-fluid "/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
              
              </Card.Text>
            </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card >
            <Card.Img variant="top" src={womenclothes} className=" img-fluid "/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
              
              </Card.Text>
            </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card >
            <Card.Img variant="top" src={womenclothes} className=" img-fluid "/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
              
              </Card.Text>
            </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card >
            <Card.Img variant="top" src={womenclothes} className=" img-fluid "/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
              
              </Card.Text>
            </Card.Body>
            </Card>
          </Col>
          <Col className=" bg-body-secondary">
            <Image src={left}/>
          </Col>
        </Row>
        
      </Container>
  )
}

export default Deal
