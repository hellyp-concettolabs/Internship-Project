import { Col, Container, Image, Row } from "react-bootstrap"
import rightarrow from "../../../assets/rightarrow.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../ElectronicsSection/electronics.scss"
import ProductCard from "../../ProductCard/ProductCard";
import { useContext, useRef } from "react";
import { ProductContext } from "../../ProductData/StoreProductContext";

function Electronics() {

  const sliderRef = useRef();
  const {productData} = useContext(ProductContext);
  const filteredProductData = productData.filter((product) => {
    return [9, 10, 11].includes(product.sub_category_id);
  });

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
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
                {filteredProductData.map((d,i) =>(
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
