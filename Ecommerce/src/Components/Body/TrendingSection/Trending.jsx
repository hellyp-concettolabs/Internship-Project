import { Col, Container, Row, Image, Button } from "react-bootstrap";
import rightarrow from "../../../assets/rightarrow.png";
import electronics2 from "../../../assets/electronics2.png";
import kitchen from "../../../assets/kitchen.png"
import home from "../../../assets/home.png"
import toys from "../../../assets/toys.png"
import sports from "../../../assets/sports.png"
import cabinet from "../../../assets/cabinet.png"
import pets from "../../../assets/pets.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../DealsOfTheDay/deal.scss"
function Trending() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
    ]
  };

  return (
    <>
      <Container className="px-0 my-4">
        <Row className="mb-4 position-relative">
          <Col className="mb-4 mb-md-0 px-4 d-flex align-items-center col-8 ">
            <h2 className="mb-0">Trending on BargainFox</h2>
          </Col>
          <Col className="d-flex justify-content-md-end align-items-center gap-2 ">
            <span className="fs-6 ">View All</span>
            <Image src={rightarrow} className="img-fluid" />
          </Col>
        </Row>
        <div className=" gap-3  px-4">
          <Slider {...settings}>
          <div className=" text-center ">
            <div>
                <div className="d-flex flex-column align-items-center bg-body-secondary rounded-circle m-2">
                    <Image src={electronics2} className="img-fluid " />
                    <Button className="rounded-5 p-2 mt-3 w-100">Up to 10% off</Button>
                </div>
            </div>
            <span className="mt-2 fs-5 ">Electronics</span>
          </div>
          <div className=" text-center ">
            <div>
                <div className="d-flex flex-column align-items-center bg-body-secondary rounded-circle m-2">
                    <Image src={kitchen} className="img-fluid" />
                    <Button className="rounded-5 p-2 mt-3 w-100">Up to 10% off</Button>
                </div>
            </div>
            <span className="mt-2 fs-5 ">Kitchen</span>
          </div>
          <div className=" text-center ">
            <div>
                <div className="d-flex flex-column align-items-center bg-body-secondary rounded-circle m-2">
                    <Image src={home} className="img-fluid" />
                    <Button className="rounded-5 p-2 mt-3 w-100">Up to 10% off</Button>
                </div>
            </div>
            <span className="mt-2 fs-5 ">Home</span>
          </div>
          <div className=" text-center ">
            <div>
                <div className="d-flex flex-column align-items-center bg-body-secondary rounded-circle m-2">
                    <Image src={toys} className="img-fluid" />
                    <Button className="rounded-5 p-2 mt-3 w-100">Up to 10% off</Button>
                </div>
            </div>
            <span className="mt-2 fs-5 ">Toys</span>
          </div>
          <div className=" text-center ">
            <div>
                <div className="d-flex flex-column align-items-center bg-body-secondary rounded-circle m-2">
                    <Image src={sports} className="img-fluid" />
                    <Button className="rounded-5 p-2 mt-3 w-100">Up to 10% off</Button>
                </div>
            </div>
            <span className="mt-2 fs-5 ">Sports</span>
          </div>
          <div className=" text-center ">
            <div>
                <div className="d-flex flex-column align-items-center bg-body-secondary rounded-circle m-2">
                    <Image src={cabinet} className="img-fluid " />
                    <Button className="rounded-5 p-2 mt-3 w-100">Up to 10% off</Button>
                </div>
            </div>
            <span className="mt-2 fs-5 ">Cabinet</span>
          </div>
          <div className=" text-center ">
            <div>
                <div className="d-flex flex-column align-items-center bg-body-secondary rounded-circle m-2">
                    <Image src={pets} className="img-fluid" />
                    <Button className="rounded-5 p-2 mt-3 w-100">Up to 10% off</Button>
                </div>
            </div>
            <span className="mt-2 fs-5 ">Pets</span>
          </div>
         
          </Slider>
        </div>
      </Container>
    </>
  );
}

export default Trending;