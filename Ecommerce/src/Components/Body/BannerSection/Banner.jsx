import banner from "../../../assets/banner.png"
import { Image, Container, Row, Col } from "react-bootstrap"

function Banner() {
  return (
    <>
    <Container fluid className="my-3">
      <Row>
        <Col>
            <Image src={banner} className=" img-fluid w-100 "/>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Banner
