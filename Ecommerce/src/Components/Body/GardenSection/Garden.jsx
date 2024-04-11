import { Col, Container, Image, Row } from "react-bootstrap"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../ElectronicsSection/electronics.scss"
import rightarrow from "../../../assets/rightarrow.png";
import ProductCard from "../../ProductCard/ProductCard";
import "./garden.scss"
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function Garden() {

  const sliderRef = useRef();

  const[productData,setProductData] = useState([]);
  const [requestMade,setRequestMade] = useState(false);
  useEffect(() => {
    const fetchData = async() =>{
    if(!requestMade){
    await axios.post(' https://bargainfox-dev.concettoprojects.com/api/product/list',{
      per_page:"100",
      category_id:"sports-leisure",
      sub_category_id:"garden-diy"
   })
    .then(response =>{
      setProductData(response.data.result.data)
      setRequestMade(true);
    })
    .catch(error =>{
      console.error('Error making GET request:', error);
    })
  }
  }
  fetchData();
  },[requestMade])

  useEffect( () =>{
  },[productData]);

    const settings = {
        dots: false,
        arrow: false,
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
                {productData.map((d,i) =>(
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
