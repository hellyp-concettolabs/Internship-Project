import { Image, Container, Row, Col } from "react-bootstrap"
import banner from "../../assets/banner.png"


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
