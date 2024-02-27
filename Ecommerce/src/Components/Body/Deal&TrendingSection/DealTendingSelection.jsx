import { Col, Container, Image, Row } from "react-bootstrap"
import dealsofweek from "../../../assets/dealsofweek.png"
import trending from "../../../assets/trending.png"
import clearance2 from "../../../assets/clearance2.png"


function DealTendingSelection() {
  return (
    <>
      <Container className=" my-3 ">
        <Row>
          <Col className=" col-12 col-md-6 col-lg-4">
            <div className=" text-center ">
              <Image src={dealsofweek} className=" img-fluid "/>
              <div className=" fw-bold fs-6">Deals of the Week</div>
              <a href="#" className=" text-danger text-decoration-none small ">View All Products</a>
            </div>
          </Col>
          <Col className=" col-12 col-md-6 col-lg-4 ">
            <div className=" text-center ">
              <Image src={trending} className=" img-fluid "/>
              <div className=" fw-bold fs-6">Trending</div>
              <a href="#" className=" text-danger text-decoration-none small ">View All Products</a>
            </div>
          </Col>
          <Col className=" col-12 col-md-6 col-lg-4 ">
            <div className=" text-center ">
              <Image src={clearance2} className=" img-fluid "/>
              <div className=" fw-bold fs-6">Clearance</div>
              <a href="#" className=" text-danger text-decoration-none small ">View All Products</a>
            </div>
          </Col>
        </Row>
      </Container> 
    </>
  )
}

export default DealTendingSelection
