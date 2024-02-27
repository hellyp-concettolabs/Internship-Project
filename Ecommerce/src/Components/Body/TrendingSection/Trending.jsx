import { Col, Container, Row, Image, Button } from "react-bootstrap";
import rightarrow from "../../../assets/rightarrow.png";
import electronics2 from "../../../assets/electronics2.png";
import kitchen from "../../../assets/kitchen.png"

function Trending() {
  return (
    <>
      <Container className="px-0 mb-3">
        <Row className="mb-4 position-relative">
          <Col className="mb-4 mb-md-0 px-4 d-flex align-items-center">
            <h2 className="mb-0">Trending on BargainFox</h2>
          </Col>
          <Col className="d-flex justify-content-md-end align-items-center gap-2 ">
            <span className="fs-6 ">View All</span>
            <Image src={rightarrow} className="img-fluid" />
          </Col>
        </Row>
        <Row className=" gap-3  px-4">
          <Col className=" text-center ">
            <Row>
                <Col className="d-flex flex-column align-items-center bg-body-secondary rounded-circle ">
                    <Image src={electronics2} className="img-fluid mt-2 " />
                    <Button className="rounded-5 p-2 mt-3 w-100">Up to 10% off</Button>
                </Col>
            </Row>
            <span className="mt-2 fs-5 ">Electronics</span>
          </Col>
          <Col className=" text-center ">
            <Row>
                <Col className="d-flex flex-column align-items-center bg-body-secondary rounded-circle ">
                    <Image src={kitchen} className="img-fluid mt-2 " />
                    <Button className="rounded-5 p-2 mt-3 w-100">Up to 10% off</Button>
                </Col>
            </Row>
            <span className="mt-2 fs-5 ">Kitchen</span>
          </Col>
          <Col className=" text-center ">
            <Row>
                <Col className="d-flex flex-column align-items-center bg-body-secondary rounded-circle position-relative">
                    <Image src={electronics2} className="img-fluid" />
                    <Button className="rounded-5 p-2 mt-3 w-100">Up to 10% off</Button>
                </Col>
            </Row>
            <span className="mt-2 fs-5 ">Electronics</span>
          </Col>
          <Col className=" text-center ">
            <Row>
                <Col className="d-flex flex-column align-items-center bg-body-secondary rounded-circle position-relative">
                    <Image src={electronics2} className="img-fluid" />
                    <Button className="rounded-5 p-2 mt-3 w-100">Up to 10% off</Button>
                </Col>
            </Row>
            <span className="mt-2 fs-5 ">Electronics</span>
          </Col>
          <Col className=" text-center ">
            <Row>
                <Col className="d-flex flex-column align-items-center bg-body-secondary rounded-circle position-relative">
                    <Image src={electronics2} className="img-fluid" />
                    <Button className="rounded-5 p-2 mt-3 w-100">Up to 10% off</Button>
                </Col>
            </Row>
            <span className="mt-2 fs-5 ">Electronics</span>
          </Col>
          <Col className=" text-center ">
            <Row>
                <Col className="d-flex flex-column align-items-center bg-body-secondary rounded-circle position-relative">
                    <Image src={electronics2} className="img-fluid" />
                    <Button className="rounded-5 p-2 mt-3 w-100">Up to 10% off</Button>
                </Col>
            </Row>
            <span className="mt-2 fs-5 ">Electronics</span>
          </Col>
         
        </Row>
      </Container>
    </>
  );
}

export default Trending;