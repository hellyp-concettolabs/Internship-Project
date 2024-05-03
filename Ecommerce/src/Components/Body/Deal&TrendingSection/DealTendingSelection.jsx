import { Col, Container, Image, Row } from "react-bootstrap"
import dealsofweek from "../../../assets/dealsofweek.png"
import trending from "../../../assets/trending.png"
import clearance2 from "../../../assets/clearance2.png"
import { Link } from "react-router-dom"
import "./dealtrending.scss"


function DealTendingSelection() {
  return (
    <>
      <Container className="dtccontainer ">
        <Row>
          <Col className=" col-12 col-xs-6 col-sm-6 col-md-4 col-xl-4 col-xxl-4 ">
          <Link to="/dealsoftheday" className=" text-decoration-none text-dark ">
            <div className=" text-center ">
              <Image src={dealsofweek} className=" img-fluid "/>
              <div className=" fw-bold fs-6 mt-2">Deals of the Week</div>
              <span className=" text-danger text-decoration-none small ">View All Products</span>
            </div>
            </Link>
          </Col>
          <Col className=" col-12 col-xs-6 col-sm-6 col-md-4 col-xl-4 col-xxl-4 ">
          <Link to="#" className=" text-decoration-none text-dark ">
            <div className=" text-center ">
              <Image src={trending} className=" img-fluid "/>
              <div className=" fw-bold fs-6">Trending</div>
              <span className=" text-danger text-decoration-none small ">View All Products</span>
            </div>            
            </Link>
          </Col>
          <Col className=" col-12 col-xs-6 col-sm-6 col-md-4 col-xl-4 col-xxl-4 ">
            <div className=" text-center ">
              <Image src={clearance2} className=" img-fluid "/>
              <div className=" fw-bold fs-6 mt-2">Clearance</div>
              <a href="#" className=" text-danger text-decoration-none small ">View All Products</a>
            </div>
          </Col>
        </Row>
      </Container> 
    </>
  )
}

export default DealTendingSelection
