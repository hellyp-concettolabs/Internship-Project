import { Col, Container, Image, Row } from "react-bootstrap";
import Slider from "react-slick";
import {useRef } from "react";
import womenclothes from "../../assets/womanclothes.png";
import manclothing from "../../assets/manclothing.png";
import shoes from "../../assets/shoes.png";
import sportsshoe from "../../assets/sportsshoe.png";
import jewellery from "../../assets/jewellery.png";
import sunglasses from "../../assets/sunglasses.png";
import ProductListPage from "../ProductSection/ProductListPage";

function Dealsoftheday() {

  const sliderRef = useRef();
  
  const data1 = [
      {
        img : womenclothes,
        discount : `Upto 40% off`,
        title:`Women's Western Clothing`,
      },
      {
        img : manclothing,
        discount : `Upto 40% off`,
        title:`Men's Western Clothing`,
      },
      {
        img : shoes,
        discount : `Upto 50% off`,
        title:`Casual Shoes`,
      },
      {
        img : sportsshoe,
        discount : `Flat 50% off`,
        title:`Men's Running shoes`,
      },
      {
        img : jewellery,
        discount : `Upto 20% off`,
        title:`Statement Fashion Jewellery`,
      },
      {
        img : sunglasses,
        discount : `Upto 10% off`,
        title:`Sunglasses`,
      },
      
    ]
    
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
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      <Container fluid className=" py-5" style={{backgroundColor:"#f5f5fc"}}>
        <Container>
            <Row>
                <Col className=" text-center ">
                    <span  className=" fs-3 fw-bold ">Deals of the Day</span>
                </Col>
            </Row>


            <Row>
                <Col className=" text-center ">
                    <span className=" text-secondary small ">
                    Explore great offers on various products from wide range of categories. Up to 80% Off
                    </span>
                </Col>
            </Row>


            <Row  className=" mt-3 Slider d-flex justify-content-center align-items-center">
              <Col className="leftarrow">
                <div className=" p-0 w-100 h-100 d-flex justify-content-center align-items-center " style={{backgroundColor:"#fff", borderRadius:"50%", textAlign:"center"}}
                  onClick={goToPrev}>
                  <i className="bi bi-arrow-left-short" style={{ color: '#0036FF' }}></i>
                </div>
              </Col>
              <Col className="centerslider">
                  <Slider ref={sliderRef} {...settings}>
                  {data1.map((d) => (
                    <div key={d.title} >
                      <div className=" d-flex flex-column align-items-center ">
                      <div className=" rounded-circle d-flex align-items-center " >
                        <Image src={d.img} className=" img-fluid rounded-circle "style={{height:"100px"}}/>
                      </div>
                      <div className=" text-center ">
                        <span className=" p-2 bg-primary rounded-5 ">{d.discount}</span>
                        <p className="px-2 small mt-2 ">{d.title}</p>
                      </div>
                      </div>
                    </div>
                  ))}
                  </Slider>
              </Col>
              <Col className="rightarrow">
                <div className=" p-0 w-100 h-100 d-flex justify-content-center align-items-center " style={{backgroundColor:"#fff", borderRadius:"50%", textAlign:"center"}}
                   onClick={goToNext}>
                  <i className="bi bi-arrow-right-short" style={{ color: '#0036FF' }}></i>
                </div>
             </Col> 
            </Row>
        </Container>
      </Container>


      <Container fluid className=" container-lg mt-5">
          <Row>
            <ProductListPage/>
          </Row>
      </Container>

    </>
  )
}

export default Dealsoftheday
