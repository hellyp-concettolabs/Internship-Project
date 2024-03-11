import { Col, Container, Image, Row } from "react-bootstrap"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../ElectronicsSection/electronics.scss"
import glowgarden from "../../../assets/glowgarden.png"
import sprinkler from "../../../assets/sprinkler.png"
import headphone from "../../../assets/headphone.png"
import watch from "../../../assets/watch.png"
import rightarrow from "../../../assets/rightarrow.png";
import ProductCard from "../../ProductCard/ProductCard";
import "./garden.scss"
import { useRef } from "react";

function Garden() {

  const sliderRef = useRef();
    const data = [
        {
            img: glowgarden ,
            title: `Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden...`,
            price:`44`,
            actualprice:`50.50`,
            discount:`10%`,
        },
        {
            img: sprinkler,
            title: `Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden...`,
            price:`44`,
            actualprice:`50.50`,
            discount:`10%`,
        },
        {
            img: headphone ,
            title: `Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden...`,
            price:`44`,
            actualprice:`50.50`,
            discount:`10%`,
        },
        {
            img: watch,
            title: `Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden...`,
            price:`44`,
            actualprice:`50.50`,
            discount:`10%`,
        },
    ]

    const settings = {
        dots: false,
        arrow: false,
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
        <Row className=" mb-3 mb-md-4 ">
          <Col className="d-flex align-items-center col-8 ">
            <div className="gardenheader">Garden & DIY</div>
          </Col>
          <Col className="d-flex justify-content-end align-items-center gap-2 ">
            <span className="viewall">View All</span>
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
    </Container> 
    </>
  )
}

export default Garden
