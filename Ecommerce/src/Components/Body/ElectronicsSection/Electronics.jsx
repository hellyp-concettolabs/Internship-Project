import { Col, Container, Image, Row } from "react-bootstrap"
import rightarrow from "../../../assets/rightarrow.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../ElectronicsSection/electronics.scss"
import tablet from "../../../assets/tablet.png"
import robot from "../../../assets/robot.png"
import headphone from "../../../assets/headphone.png"
import watch from "../../../assets/watch.png"

function Electronics() {

    const data = [
        {
            img: tablet ,
            title: `Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch Retina Display, 256GB, Wi-Fi, 12MP`,
            price:`44`,
            actualprice:`50.50`,
            discount:`10%`,
        },
        {
            img: robot ,
            title: `Eilik - an Electronic Robot Pets Toys with Intelligent and Interactive | Abundant Emotions, Idle...`,
            price:`44`,
            actualprice:`50.50`,
            discount:`10%`,
        },
        {
            img: headphone ,
            title: `LOBKIN Wireless Bluetooth Headphones, Over-Ear Headphones with Built-in HD Mic`,
            price:`44`,
            actualprice:`50.50`,
            discount:`10%`,
        },
        {
            img: watch,
            title: `SAMSUNG Galaxy Watch 5 40mm Bluetooth Smartwatch w/ Body, Health, Fitness and Sleep Tracker..`,
            price:`44`,
            actualprice:`50.50`,
            discount:`10%`,
        },
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
        ]
      };

  return (
    <>
     <Container className="px-0 my-4">
        <Row className="mb-4 position-relative mb-2 mb-md-4 ">
          <Col className="px-4 d-flex align-items-center col-8 ">
            <h2 className="mb-0">Electronics</h2>
          </Col>
          <Col className="d-flex justify-content-md-end align-items-center gap-2 ">
            <span className="fs-6 ">View All</span>
            <Image src={rightarrow} className="img-fluid" />
          </Col>
        </Row>

        <div>
            <Slider {...settings}>
                {data.map((d) =>(
                    <div key={d.title} className=" px-2 ">
                        <div className=" border rounded-5 ">
                            <div>
                                <Image src={d.img} className=" img-fluid w-100 "/>
                            </div>
                            <div className=" p-3 ">
                                <p className=" small">{d.title}</p>
                                <div className=" d-flex justify-content-between align-items-center ">
                                    <div className="">
                                        <span className=" fw-bold mx-2 fs-6 "><sup>$</sup>{d.price}</span>
                                        <span className=" text-decoration-line-through ">${d.actualprice}</span>
                                    </div>
                                    <div>
                                        <span>{d.discount}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </Container> 
    </>
  )
}

export default Electronics
