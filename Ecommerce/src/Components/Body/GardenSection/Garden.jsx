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

function Garden() {

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
     <Container className="gardencontainer">
        <Row className="mb-4 position-relative mb-2 mb-md-4 ">
          <Col className="d-flex align-items-center col-8 ">
            <div className="gardenheader mb-0">Garden & DIY</div>
          </Col>
          <Col className="d-flex justify-content-end align-items-center gap-2 ">
            <span className="viewall">View All</span>
            <Image src={rightarrow} className="img-fluid" />
          </Col>
        </Row>

        <div>
            <Slider {...settings}>
                {data.map((d,i) =>(
                    <ProductCard d={d} key={i}/>
                ))}
            </Slider>
        </div>
    </Container> 
    </>
  )
}

export default Garden
