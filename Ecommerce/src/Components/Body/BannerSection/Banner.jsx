import banner from "../../../assets/banner.png"
import { Image, Container, Row, Col } from "react-bootstrap"

function Banner() {
  return (
    <Container fluid className=" mb-4 p-0">
      <Row>
        <Col>
            <Image src={banner} className=" img-fluid "/>
        </Col>
      </Row>
    </Container>
  )
}

export default Banner
