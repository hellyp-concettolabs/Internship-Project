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
import ProductCard from "../../ProductCard/ProductCard";
import { useRef } from "react";

function Electronics() {

  const sliderRef = useRef();

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
            breakpoint: 1200,
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

      const goToPrev = () => {
        sliderRef.current.slickPrev();
      };

      const goToNext = () => {
        sliderRef.current.slickNext();
      };

  return (
    <>
     <Container className="gardencontainer">
      <div>
        <Row className="mb-3 mb-md-4 ">
          <Col className="d-flex align-items-center col-8 ">
            <h2 className="gardenheader">Electronics</h2>
          </Col>
          <Col className="d-flex justify-content-md-end align-items-center gap-2 ">
            <span className="viewall ">View All</span>
            <Image src={rightarrow} className="img-fluid" />
          </Col>
        </Row>

        <Row className=" d-flex justify-content-center align-items-center ">
          <Col className="leftarrow">
            <div className=" p-0 w-100 h-100 d-flex justify-content-center align-items-center " style={{backgroundColor:"#F5F5FC", borderRadius:"50%", textAlign:"center"}}
              onClick={goToPrev}>
              <i className="bi bi-arrow-left-short" style={{ color: '#0036FF' }}></i>
            </div>
          </Col>
          <Col className="centerslider">
            <Slider ref={sliderRef} {...settings}>
                {data.map((d,i) =>(
                    <ProductCard d={d} key={i}/>
                ))}
            </Slider>
          </Col>
          <Col className="rightarrow">
          <div className=" p-0 w-100 h-100 d-flex justify-content-center align-items-center " style={{backgroundColor:"#F5F5FC", borderRadius:"50%", textAlign:"center"}}
           onClick={goToNext}>
              <i className="bi bi-arrow-right-short" style={{ color: '#0036FF' }}></i>
            </div>
          </Col>
        </Row>
        </div>
    </Container> 
    </>
  )
}

export default Electronics
