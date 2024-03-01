import { Container,Row, Col, Image } from "react-bootstrap"
import HomeKitchen from "../../../assets/HomeKitchen.png"
import HealthBeauty from "../../../assets/HealthBeauty.png"
import Electronics from "../../../assets/Electronics.png"
import ToysCrafts from "../../../assets/ToysCrafts.png"
import SportsLeisure from "../../../assets/SportsLeisure.png"
import Clearance from "../../../assets/Clearance.png"
import '../MenuBar/menu.scss'
function Menu() {
  return (
    <Container fluid  className=" container-lg mb-4">
      <Row className=" d-flex align-items-center justify-content-center">
        <Col className=" d-none d-xl-block "></Col>
        <Col className=" d-none d-lg-block "></Col>
        <Col className=" d-flex flex-column text-center dropdown  Home" >
            <Image src={HomeKitchen} className=" img-fluid "/>
            <span className=" mt-1">Home & Kitchen</span>
            <div className=" dropdown-menu dropdown-content">
              <div className=" bg-primary rounded-circle "></div>
              <ul className=" list-unstyled ">
                <li className=" dropdown-item ">Home</li>
                <li className=" dropdown-item ">Kitchen</li>
                <li className=" dropdown-item ">Office</li>
              </ul>
            </div>
        </Col>
        <Col className=" d-flex flex-column text-center dropdown  Home" >
            <Image src={HealthBeauty} className=" img-fluid "/>
            <span className=" mt-1">Health & Beauty</span>
            <div className=" dropdown-menu dropdown-content">
              <ul className=" list-unstyled ">
                <li className=" dropdown-item ">Application</li>
                <li className=" dropdown-item ">Home</li>
                <li className=" dropdown-item ">Kitchen</li>
              </ul>
            </div>
        </Col>
        <Col className=" d-flex flex-column text-center">
            <Image src={Electronics} className=" img-fluid"/>
            <span className=" mt-1 ">Electronics</span>
        </Col>
        <Col className=" d-flex flex-column text-center d-none d-md-block">
            <Image src={ToysCrafts} className=" img-fluid"/>
            <span className=" mt-1 ">Toys & Crafts</span>
        </Col>
        <Col className=" d-flex flex-column text-center d-none d-md-block">
            <Image src={SportsLeisure} className=" img-fluid"/>
            <span className="  mt-1 ">Sports & Leisure</span>
        </Col>
        <Col className=" d-flex flex-column text-center d-none d-md-block">
            <Image src={Clearance} className=" img-fluid"/>
            <span className=" mt-1 ">Clearance</span>
        </Col>
        <Col className=" d-flex flex-column text-center ">
            <Image src={Clearance} className=" img-fluid"/>
            <span className=" mt-1 ">View more</span>
        </Col>
        <Col className=" d-none d-xl-block "></Col>
        <Col className=" d-none  d-lg-block "></Col>
      </Row>
    </Container>
  )
}

export default Menu
